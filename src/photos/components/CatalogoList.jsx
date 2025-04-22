import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CatalogoList = () => {
  // Estado para los productos del catálogo - ahora con productos de ropa
  const [productos, setProductos] = useState([
    { 
      id: 1, 
      nombre: 'Camiseta Básica', 
      descripcion: 'Camiseta de algodón de alta calidad, perfecta para el uso diario', 
      precio: 1200, 
      categoria: 'Camisetas', 
      imagen: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      disponible: true
    },
    { 
      id: 2, 
      nombre: 'Pantalón Vaquero', 
      descripcion: 'Vaquero clásico de corte recto, denim duradero y confortable', 
      precio: 2500, 
      categoria: 'Pantalones', 
      imagen: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      disponible: true
    },
    { 
      id: 3, 
      nombre: 'Vestido de Verano', 
      descripcion: 'Vestido ligero con estampado floral, perfecto para días soleados', 
      precio: 1800, 
      categoria: 'Vestidos', 
      imagen: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      disponible: true
    },
    { 
      id: 4, 
      nombre: 'Zapatillas Deportivas', 
      descripcion: 'Zapatillas de running con suela amortiguada y tecnología transpirable', 
      precio: 3200, 
      categoria: 'Calzado', 
      imagen: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      disponible: false
    },
    { 
      id: 5, 
      nombre: 'Chaqueta de Cuero', 
      descripcion: 'Chaqueta de cuero genuino con forro interior, estilo clásico y atemporal', 
      precio: 5500, 
      categoria: 'Abrigos', 
      imagen: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      disponible: true
    },
    { 
      id: 6, 
      nombre: 'Sudadera con Capucha', 
      descripcion: 'Sudadera cómoda de mezcla de algodón con bolsillo canguro y capucha ajustable', 
      precio: 1800, 
      categoria: 'Sudaderas', 
      imagen: 'https://images.unsplash.com/photo-1556172944-dc52d5ba8016?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      disponible: true
    },
    { 
      id: 7, 
      nombre: 'Falda Plisada', 
      descripcion: 'Falda plisada de longitud midi, tejido fluido y cintura elástica', 
      precio: 1500, 
      categoria: 'Faldas', 
      imagen: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      disponible: true
    },
    { 
      id: 8, 
      nombre: 'Camisa de Lino', 
      descripcion: 'Camisa 100% lino, corte regular, perfecta para ocasiones formales e informales', 
      precio: 2200, 
      categoria: 'Camisas', 
      imagen: 'https://images.unsplash.com/photo-1598961942613-ba897716405b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      disponible: true
    },
    { 
      id: 9, 
      nombre: 'Bufanda de Cachemira', 
      descripcion: 'Bufanda suave y cálida hecha de cachemira pura, ideal para el invierno', 
      precio: 2800, 
      categoria: 'Accesorios', 
      imagen: 'https://images.unsplash.com/photo-1584736286279-f4e3a5b1147f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      disponible: true
    },
    { 
      id: 10, 
      nombre: 'Gorra Deportiva', 
      descripcion: 'Gorra con tecnología de secado rápido y protección UV', 
      precio: 850, 
      categoria: 'Accesorios', 
      imagen: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      disponible: true
    },
    { 
      id: 11, 
      nombre: 'Zapatos de Vestir', 
      descripcion: 'Zapatos de cuero italiano con suela de goma, elegantes y confortables', 
      precio: 4200, 
      categoria: 'Calzado', 
      imagen: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      disponible: false
    },
    { 
      id: 12, 
      nombre: 'Suéter de Lana', 
      descripcion: 'Suéter tejido con lana merino, cuello redondo y corte clásico', 
      precio: 2900, 
      categoria: 'Suéteres', 
      imagen: 'https://images.unsplash.com/photo-1599719500956-d158a3abd461?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      disponible: true
    }
  ]);

  // Estado para la búsqueda, filtro y ordenamiento
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [ordenamiento, setOrdenamiento] = useState('nombre-asc');
  const [vistaGrid, setVistaGrid] = useState(true);
  
  // Estado para paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 8; // Aumentado a 8 para mostrar más productos por página
  
  // Estado para productos filtrados
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  
  // Obtener categorías únicas
  const categorias = ['Todas', ...new Set(productos.map(producto => producto.categoria))];

  // Efecto para filtrar y ordenar productos
  useEffect(() => {
    let resultado = [...productos];
    
    // Aplicar filtro de búsqueda
    if (busqueda) {
      resultado = resultado.filter(producto => 
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(busqueda.toLowerCase())
      );
    }
    
    // Aplicar filtro de categoría
    if (categoriaSeleccionada !== 'Todas') {
      resultado = resultado.filter(producto => 
        producto.categoria === categoriaSeleccionada
      );
    }
    
    // Aplicar ordenamiento
    switch (ordenamiento) {
      case 'nombre-asc':
        resultado.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case 'nombre-desc':
        resultado.sort((a, b) => b.nombre.localeCompare(a.nombre));
        break;
      case 'precio-asc':
        resultado.sort((a, b) => a.precio - b.precio);
        break;
      case 'precio-desc':
        resultado.sort((a, b) => b.precio - a.precio);
        break;
      default:
        resultado.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
    
    setProductosFiltrados(resultado);
  }, [busqueda, categoriaSeleccionada, ordenamiento, productos]);

  // Calcular productos para la página actual
  const indexOfLastProducto = paginaActual * productosPorPagina;
  const indexOfFirstProducto = indexOfLastProducto - productosPorPagina;
  const productosActuales = productosFiltrados.slice(indexOfFirstProducto, indexOfLastProducto);
  
  // Cambiar página
  const paginar = (numeroPagina) => setPaginaActual(numeroPagina);
  
  // Ir a la página anterior
  const paginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };
  
  // Ir a la página siguiente
  const paginaSiguiente = () => {
    if (paginaActual < Math.ceil(productosFiltrados.length / productosPorPagina)) {
      setPaginaActual(paginaActual + 1);
    }
  };

  // Función para eliminar un producto
  const eliminarProducto = (id) => {
    if (window.confirm('¿Está seguro que desea eliminar este producto?')) {
      setProductos(productos.filter(producto => producto.id !== id));
    }
  };

  // Función para cambiar disponibilidad
  const cambiarDisponibilidad = (id) => {
    setProductos(productos.map(producto => 
      producto.id === id 
        ? { ...producto, disponible: !producto.disponible } 
        : producto
    ));
  };

  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="mb-0">Catálogo de Ropa</h2>
            <Link to="/catalogo/nuevo" className="btn btn-primary">
              <i className="fas fa-plus me-1"></i> Nuevo Producto
            </Link>
          </div>
        </div>
      </div>

      {/* Filtros, búsqueda y opciones de visualización */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="input-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Buscar prendas..." 
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <button className="btn btn-outline-secondary" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="col-md-8">
          <div className="d-flex flex-wrap justify-content-md-end gap-2">
            <select 
              className="form-select me-2" 
              style={{ width: 'auto' }}
              value={categoriaSeleccionada}
              onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            >
              {categorias.map((categoria, index) => (
                <option key={index} value={categoria}>{categoria}</option>
              ))}
            </select>
            
            <select 
              className="form-select me-2" 
              style={{ width: 'auto' }}
              value={ordenamiento}
              onChange={(e) => setOrdenamiento(e.target.value)}
            >
              <option value="nombre-asc">Nombre (A-Z)</option>
              <option value="nombre-desc">Nombre (Z-A)</option>
              <option value="precio-asc">Precio (Menor a Mayor)</option>
              <option value="precio-desc">Precio (Mayor a Menor)</option>
            </select>
            
            <div className="btn-group">
              <button 
                type="button" 
                className={`btn ${vistaGrid ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setVistaGrid(true)}
              >
                <i className="fas fa-th"></i>
              </button>
              <button 
                type="button" 
                className={`btn ${!vistaGrid ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setVistaGrid(false)}
              >
                <i className="fas fa-list"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mensaje si no hay productos */}
      {productosFiltrados.length === 0 && (
        <div className="alert alert-info" role="alert">
          No se encontraron productos que coincidan con los criterios de búsqueda.
        </div>
      )}

      {/* Vista de Grid */}
      {vistaGrid && (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-4">
          {productosActuales.map(producto => (
            <div key={producto.id} className="col">
              <div className="card h-100 shadow-sm hover-shadow">
                <div className="position-relative">
                  <img 
                    src={producto.imagen} 
                    className="card-img-top" 
                    alt={producto.nombre}
                    style={{ height: '280px', objectFit: 'cover' }}
                    onError={(e) => {e.target.src = 'https://via.placeholder.com/500x600?text=Imagen+no+disponible'}}
                  />
                  {!producto.disponible && (
                    <span className="position-absolute top-0 end-0 badge bg-danger m-2">
                      No Disponible
                    </span>
                  )}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text text-truncate">{producto.descripcion}</p>
                  <p className="card-text">
                    <small className="text-muted">Categoría: {producto.categoria}</small>
                  </p>
                  <h5 className="card-text text-primary">${producto.precio.toLocaleString()}</h5>
                </div>
                <div className="card-footer bg-white d-flex justify-content-between">
                  <div>
                    <button 
                      className="btn btn-sm btn-outline-secondary me-1"
                      onClick={() => cambiarDisponibilidad(producto.id)}
                      title={producto.disponible ? "Marcar como no disponible" : "Marcar como disponible"}
                    >
                      {producto.disponible ? (
                        <i className="fas fa-toggle-on text-success"></i>
                      ) : (
                        <i className="fas fa-toggle-off text-secondary"></i>
                      )}
                    </button>
                  </div>
                  <div>
                    <Link 
                      to={`/catalogo/detalle/${producto.id}`} 
                      className="btn btn-sm btn-outline-primary me-1"
                      title="Ver detalles"
                    >
                      <i className="fas fa-eye"></i>
                    </Link>
                    <Link 
                      to={`/catalogo/editar/${producto.id}`} 
                      className="btn btn-sm btn-outline-secondary me-1"
                      title="Editar producto"
                    >
                      <i className="fas fa-edit"></i>
                    </Link>
                    <button 
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => eliminarProducto(producto.id)}
                      title="Eliminar producto"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Vista de Lista */}
      {!vistaGrid && (
        <div className="card mb-4 shadow-sm">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0 align-middle">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Disponible</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productosActuales.map(producto => (
                    <tr key={producto.id}>
                      <td>
                        <img 
                          src={producto.imagen} 
                          alt={producto.nombre} 
                          className="img-thumbnail" 
                          style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                          onError={(e) => {e.target.src = 'https://via.placeholder.com/80x80?text=No+disponible'}}
                        />
                      </td>
                      <td>
                        <strong>{producto.nombre}</strong>
                        <br />
                        <small className="text-muted">{producto.descripcion.substring(0, 50)}...</small>
                      </td>
                      <td>{producto.categoria}</td>
                      <td>${producto.precio.toLocaleString()}</td>
                      <td>
                        <button 
                          className="btn btn-sm"
                          onClick={() => cambiarDisponibilidad(producto.id)}
                        >
                          {producto.disponible ? (
                            <i className="fas fa-toggle-on text-success fa-lg"></i>
                          ) : (
                            <i className="fas fa-toggle-off text-secondary fa-lg"></i>
                          )}
                        </button>
                      </td>
                      <td>
                        <Link 
                          to={`/catalogo/detalle/${producto.id}`} 
                          className="btn btn-sm btn-outline-primary me-1"
                          title="Ver detalles"
                        >
                          <i className="fas fa-eye"></i>
                        </Link>
                        <Link 
                          to={`/catalogo/editar/${producto.id}`} 
                          className="btn btn-sm btn-outline-secondary me-1"
                          title="Editar producto"
                        >
                          <i className="fas fa-edit"></i>
                        </Link>
                        <button 
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => eliminarProducto(producto.id)}
                          title="Eliminar producto"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Paginación */}
      <nav aria-label="Paginación de productos">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${paginaActual === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={paginaAnterior}>Anterior</button>
          </li>
          
          {Array.from({ length: Math.ceil(productosFiltrados.length / productosPorPagina) }, (_, i) => (
            <li key={i} className={`page-item ${paginaActual === i + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginar(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
          
          <li className={`page-item ${paginaActual === Math.ceil(productosFiltrados.length / productosPorPagina) ? 'disabled' : ''}`}>
            <button className="page-link" onClick={paginaSiguiente}>Siguiente</button>
          </li>
        </ul>
      </nav>

      {/* Información de resultados */}
      <div className="text-center text-muted mb-4">
        Mostrando {productosActuales.length} de {productosFiltrados.length} productos
      </div>
    </div>
  );
};

export default CatalogoList;