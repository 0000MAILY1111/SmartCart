import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const FormularioProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const esEdicion = !!id;
  const fileInputRef = useRef(null);

  // Categorías de ropa predefinidas
  const categorias = [
    'Camisetas',
    'Pantalones',
    'Vestidos',
    'Calzado',
    'Abrigos',
    'Sudaderas',
    'Faldas',
    'Camisas',
    'Accesorios',
    'Suéteres',
    'Ropa Interior',
    'Ropa Deportiva'
  ];

  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    categoria: categorias[0],
    disponible: true
  });

  // Estado para archivo de imagen
  const [imagenFile, setImagenFile] = useState(null);
  
  // Estado para errores de validación
  const [errores, setErrores] = useState({});
  
  // Estado para vista previa de imagen
  const [imagenPreview, setImagenPreview] = useState('');
  
  // Estado para seguimiento del envío
  const [enviando, setEnviando] = useState(false);
  const [mensajeExito, setMensajeExito] = useState('');

  // Efecto para cargar datos del producto si estamos en modo edición
  useEffect(() => {
    if (esEdicion) {
      // Aquí normalmente harías una llamada a tu API para obtener el producto por ID
      // Por ahora simularemos datos de ejemplo
      const obtenerProducto = async () => {
        try {
          // Simulación de datos - en una app real, obtendrías estos datos de tu API
          const productoObtenido = {
            id: parseInt(id),
            nombre: 'Camisa de Lino',
            descripcion: 'Camisa 100% lino, corte regular, perfecta para ocasiones formales e informales',
            precio: 2200,
            categoria: 'Camisas',
            disponible: true
          };
          
          setFormData(productoObtenido);
          
          // En una aplicación real, aquí cargarías la imagen desde el servidor
          // y la mostrarías como vista previa
          setImagenPreview('https://images.unsplash.com/photo-1598961942613-ba897716405b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80');
        } catch (error) {
          console.error('Error al obtener el producto:', error);
          setErrores({
            general: 'Error al cargar los datos del producto. Inténtelo nuevamente.'
          });
        }
      };

      obtenerProducto();
    }
  }, [id, esEdicion]);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Para campos checkbox usamos el valor de checked, para otros el value
    const newValue = type === 'checkbox' ? checked : value;
    
    // Actualizar estado
    setFormData({
      ...formData,
      [name]: newValue
    });
    
    // Limpiar errores al cambiar un campo
    if (errores[name]) {
      setErrores({
        ...errores,
        [name]: null
      });
    }
  };

  // Manejar cambio en campo de imagen (archivo)
  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validar tipo de archivo
    const tiposPermitidos = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!tiposPermitidos.includes(file.type)) {
      setErrores({
        ...errores,
        imagen: 'El archivo debe ser una imagen (JPG, PNG, GIF o WEBP)'
      });
      return;
    }

    // Validar tamaño (máximo 5MB)
    const tamañoMaximo = 5 * 1024 * 1024; // 5MB en bytes
    if (file.size > tamañoMaximo) {
      setErrores({
        ...errores,
        imagen: 'La imagen no debe superar los 5MB'
      });
      return;
    }

    // Guardar archivo
    setImagenFile(file);
    
    // Limpiar error si existe
    if (errores.imagen) {
      setErrores({
        ...errores,
        imagen: null
      });
    }
    
    // Crear URL para vista previa
    const objectUrl = URL.createObjectURL(file);
    setImagenPreview(objectUrl);
    
    // Limpiar URL cuando el componente se desmonte
    return () => URL.revokeObjectURL(objectUrl);
  };

  // Abrir el selector de archivos al hacer clic en el botón
  const handleClickSelectImage = () => {
    fileInputRef.current.click();
  };

  // Eliminar la imagen seleccionada
  const handleRemoveImage = () => {
    setImagenFile(null);
    setImagenPreview('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Validar el formulario
  const validarFormulario = () => {
    const nuevosErrores = {};
    
    // Validar nombre
    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre del producto es obligatorio';
    }
    
    // Validar descripción
    if (!formData.descripcion.trim()) {
      nuevosErrores.descripcion = 'La descripción es obligatoria';
    }
    
    // Validar precio
    if (!formData.precio) {
      nuevosErrores.precio = 'El precio es obligatorio';
    } else if (isNaN(formData.precio) || parseFloat(formData.precio) <= 0) {
      nuevosErrores.precio = 'El precio debe ser un número positivo';
    }
    
    // Validar categoría
    if (!formData.categoria) {
      nuevosErrores.categoria = 'Debe seleccionar una categoría';
    }
    
    // Validar imagen - solo obligatoria para nuevos productos
    if (!esEdicion && !imagenFile && !imagenPreview) {
      nuevosErrores.imagen = 'Debe seleccionar una imagen para el producto';
    }
    
    return nuevosErrores;
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar formulario
    const nuevosErrores = validarFormulario();
    
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }
    
    setEnviando(true);
    
    try {
      // Preparar datos para enviar
      const productoParaEnviar = {
        ...formData,
        precio: parseFloat(formData.precio)
      };
      
      // Si es edición, agregar ID
      if (esEdicion) {
        productoParaEnviar.id = parseInt(id);
      }

      // Aquí normalmente subirías la imagen al servidor
      // y obtendrías la URL para guardarla con el producto
      if (imagenFile) {
        // En una implementación real, aquí harías un upload de la imagen
        // y obtendrías la URL para guardarla en la base de datos
        console.log('Subiendo imagen:', imagenFile.name);
        
        // Simulamos una URL obtenida del servidor
        productoParaEnviar.imagen = URL.createObjectURL(imagenFile);
      }
      
      // Simulamos una demora y éxito
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Producto guardado:', productoParaEnviar);
      
      setMensajeExito(esEdicion ? 
        'Producto actualizado correctamente' : 
        'Producto agregado correctamente'
      );
      
      // Redirigir después de un breve momento
      setTimeout(() => {
        navigate('/catalogo');
      }, 2000);
    } catch (error) {
      console.error('Error al guardar el producto:', error);
      setErrores({
        general: 'Error al guardar el producto. Inténtelo nuevamente.'
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/catalogo">Catálogo</Link></li>
              <li className="breadcrumb-item active">{esEdicion ? 'Editar Producto' : 'Nuevo Producto'}</li>
            </ol>
          </nav>
          
          <h2 className="mb-3">{esEdicion ? 'Editar Producto' : 'Agregar Nuevo Producto'}</h2>
          
          {errores.general && (
            <div className="alert alert-danger" role="alert">
              {errores.general}
            </div>
          )}
          
          {mensajeExito && (
            <div className="alert alert-success" role="alert">
              {mensajeExito}
            </div>
          )}
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre del Producto *</label>
                  <input 
                    type="text" 
                    className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej: Camiseta de Algodón"
                  />
                  {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
                </div>
                
                <div className="mb-3">
                  <label htmlFor="descripcion" className="form-label">Descripción *</label>
                  <textarea 
                    className={`form-control ${errores.descripcion ? 'is-invalid' : ''}`}
                    id="descripcion"
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Describe el producto, características, materiales, etc."
                  ></textarea>
                  {errores.descripcion && <div className="invalid-feedback">{errores.descripcion}</div>}
                </div>
                
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="precio" className="form-label">Precio (MXN) *</label>
                    <div className="input-group">
                      <span className="input-group-text">$</span>
                      <input 
                        type="number" 
                        step="0.01" 
                        min="0"
                        className={`form-control ${errores.precio ? 'is-invalid' : ''}`}
                        id="precio"
                        name="precio"
                        value={formData.precio}
                        onChange={handleChange}
                        placeholder="0.00"
                      />
                      {errores.precio && <div className="invalid-feedback">{errores.precio}</div>}
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="categoria" className="form-label">Categoría *</label>
                    <select 
                      className={`form-select ${errores.categoria ? 'is-invalid' : ''}`}
                      id="categoria"
                      name="categoria"
                      value={formData.categoria}
                      onChange={handleChange}
                    >
                      {categorias.map((categoria, index) => (
                        <option key={index} value={categoria}>{categoria}</option>
                      ))}
                    </select>
                    {errores.categoria && <div className="invalid-feedback">{errores.categoria}</div>}
                  </div>
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Imagen del Producto *</label>
                  <div className={`border rounded p-3 ${errores.imagen ? 'border-danger' : ''}`}>
                    <div className="mb-3">
                      <input 
                        type="file" 
                        className="d-none"
                        ref={fileInputRef}
                        onChange={handleImagenChange}
                        accept="image/jpeg,image/png,image/gif,image/webp"
                      />
                      
                      <div className="d-flex gap-2">
                        <button 
                          type="button" 
                          className="btn btn-primary"
                          onClick={handleClickSelectImage}
                        >
                          <i className="fas fa-upload me-2"></i>
                          Seleccionar Imagen
                        </button>
                        
                        {imagenPreview && (
                          <button 
                            type="button" 
                            className="btn btn-outline-danger"
                            onClick={handleRemoveImage}
                          >
                            <i className="fas fa-trash me-2"></i>
                            Eliminar
                          </button>
                        )}
                      </div>
                    </div>
                    
                    {imagenFile && (
                      <div className="small text-muted">
                        <strong>Archivo:</strong> {imagenFile.name}<br />
                        <strong>Tamaño:</strong> {(imagenFile.size / 1024).toFixed(2)} KB
                      </div>
                    )}
                    
                    {errores.imagen && <div className="text-danger small mt-2">{errores.imagen}</div>}
                  </div>
                  <small className="form-text text-muted">
                    Formatos permitidos: JPG, PNG, GIF, WEBP. Tamaño máximo: 5MB. Recomendamos usar una proporción 3:4.
                  </small>
                </div>
                
                <div className="mb-3 form-check">
                  <input 
                    type="checkbox" 
                    className="form-check-input"
                    id="disponible"
                    name="disponible"
                    checked={formData.disponible}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="disponible">
                    Producto disponible para la venta
                  </label>
                </div>
                
                <div className="d-flex justify-content-between">
                  <Link to="/catalogo" className="btn btn-outline-secondary">
                    Cancelar
                  </Link>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={enviando}
                  >
                    {enviando ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Guardando...
                      </>
                    ) : (
                      esEdicion ? 'Actualizar Producto' : 'Agregar Producto'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card shadow-sm mb-4">
            <div className="card-header">
              Vista Previa
            </div>
            <div className="card-body text-center">
              {imagenPreview ? (
                <img 
                  src={imagenPreview} 
                  alt="Vista previa del producto" 
                  className="img-fluid rounded mb-3"
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                  onError={(e) => {e.target.src = 'https://via.placeholder.com/300x400?text=Vista+previa+no+disponible'}}
                />
              ) : (
                <div className="border rounded p-5 mb-3 bg-light">
                  <i className="fas fa-image fa-3x text-muted"></i>
                  <p className="mt-3 text-muted">Vista previa no disponible</p>
                </div>
              )}
              
              <div className="text-start">
                {formData.nombre && <h5>{formData.nombre}</h5>}
                {formData.precio && <p className="text-primary fs-5">${parseFloat(formData.precio).toLocaleString()}</p>}
                {formData.categoria && <p><span className="badge bg-secondary">{formData.categoria}</span></p>}
                {formData.disponible !== undefined && (
                  <p>
                    <span className={`badge ${formData.disponible ? 'bg-success' : 'bg-danger'}`}>
                      {formData.disponible ? 'Disponible' : 'No disponible'}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
          
          <div className="card shadow-sm">
            <div className="card-header">
              Información de Ayuda
            </div>
            <div className="card-body">
              <h6>Consejos para Imágenes</h6>
              <ul className="small">
                <li>Usa imágenes bien iluminadas</li>
                <li>Muestra el producto desde varios ángulos</li>
                <li>Fondos limpios ayudan a destacar el producto</li>
                <li>Usa la misma proporción para todos los productos</li>
              </ul>
              <h6>Descripción Efectiva</h6>
              <ul className="small">
                <li>Incluye material, talla y detalles</li>
                <li>Menciona beneficios del producto</li>
                <li>Sé específico y claro</li>
                <li>Incluye instrucciones de cuidado o lavado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioProducto;