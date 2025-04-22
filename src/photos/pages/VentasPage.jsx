import React, { useState } from 'react';

const GestionVentas = () => {
  const [activeTab, setActiveTab] = useState('ventas');
  
  // Datos de ejemplo para las ventas
  const ventas = [
    { id: 1, cliente: 'Empresa ABC', producto: 'Servicio Premium', fecha: '15/04/2025', monto: 2500 },
    { id: 2, cliente: 'Corporación XYZ', producto: 'Consultoría', fecha: '12/04/2025', monto: 3750 },
    { id: 3, cliente: 'Industrias 123', producto: 'Mantenimiento', fecha: '10/04/2025', monto: 1800 },
    { id: 4, cliente: 'Tienda Local', producto: 'Software Básico', fecha: '05/04/2025', monto: 950 },
    { id: 5, cliente: 'Distribuidora Norte', producto: 'Licencia Anual', fecha: '01/04/2025', monto: 4200 },
  ];
  
  // Datos de ejemplo para productos
  const productos = [
    { id: 101, nombre: 'Servicio Premium', precio: 2500, stock: 'Disponible', categoria: 'Servicios' },
    { id: 102, nombre: 'Consultoría', precio: 3750, stock: 'Disponible', categoria: 'Servicios' },
    { id: 103, nombre: 'Mantenimiento', precio: 1800, stock: 'Disponible', categoria: 'Servicios' },
    { id: 104, nombre: 'Software Básico', precio: 950, stock: '15 unidades', categoria: 'Software' },
    { id: 105, nombre: 'Licencia Anual', precio: 4200, stock: '8 unidades', categoria: 'Licencias' },
  ];
  
  // Datos de ejemplo para clientes
  const clientes = [
    { id: 201, nombre: 'Empresa ABC', contacto: 'Juan Pérez', telefono: '555-1234', correo: 'juan@empresaabc.com' },
    { id: 202, nombre: 'Corporación XYZ', contacto: 'María López', telefono: '555-5678', correo: 'maria@xyz.com' },
    { id: 203, nombre: 'Industrias 123', contacto: 'Carlos Gómez', telefono: '555-9012', correo: 'carlos@ind123.com' },
    { id: 204, nombre: 'Tienda Local', contacto: 'Ana Torres', telefono: '555-3456', correo: 'ana@tienda.com' },
    { id: 205, nombre: 'Distribuidora Norte', contacto: 'Roberto Díaz', telefono: '555-7890', correo: 'roberto@distnorte.com' },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Gestión de Ventas</h2>
            <div>
              <button className="btn btn-primary me-2">
                <i className="fas fa-plus me-1"></i> Nueva Venta
              </button>
              <button className="btn btn-outline-secondary me-2">
                <i className="fas fa-file-export me-1"></i> Exportar
              </button>
              <button className="btn btn-outline-secondary">
                <i className="fas fa-print me-1"></i> Imprimir
              </button>
            </div>
          </div>
          
          {/* Pestañas de navegación */}
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'ventas' ? 'active' : ''}`}
                onClick={() => setActiveTab('ventas')}
              >
                Ventas
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'productos' ? 'active' : ''}`}
                onClick={() => setActiveTab('productos')}
              >
                Productos
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'clientes' ? 'active' : ''}`}
                onClick={() => setActiveTab('clientes')}
              >
                Clientes
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'informes' ? 'active' : ''}`}
                onClick={() => setActiveTab('informes')}
              >
                Informes
              </button>
            </li>
          </ul>
          
          {/* Filtros y búsqueda */}
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Buscar..." 
                  aria-label="Buscar"
                />
                <button className="btn btn-outline-secondary" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <select className="form-select me-2" style={{ width: 'auto' }}>
                <option>Filtrar por fecha</option>
                <option>Hoy</option>
                <option>Esta semana</option>
                <option>Este mes</option>
                <option>Personalizado</option>
              </select>
              <select className="form-select" style={{ width: 'auto' }}>
                <option>Ordenar por</option>
                <option>Más reciente</option>
                <option>Mayor monto</option>
                <option>Menor monto</option>
                <option>Nombre del cliente</option>
              </select>
            </div>
          </div>
          
          {/* Contenido de la pestaña Ventas */}
          {activeTab === 'ventas' && (
            <>
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead className="table-light">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Cliente</th>
                          <th scope="col">Producto/Servicio</th>
                          <th scope="col">Fecha</th>
                          <th scope="col">Monto</th>
                          <th scope="col">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ventas.map(venta => (
                          <tr key={venta.id}>
                            <th scope="row">{venta.id}</th>
                            <td>{venta.cliente}</td>
                            <td>{venta.producto}</td>
                            <td>{venta.fecha}</td>
                            <td>${venta.monto.toLocaleString()}</td>
                            <td>
                              <button className="btn btn-sm btn-outline-primary me-1">
                                <i className="fas fa-eye"></i>
                              </button>
                              <button className="btn btn-sm btn-outline-secondary me-1">
                                <i className="fas fa-edit"></i>
                              </button>
                              <button className="btn btn-sm btn-outline-danger">
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
              
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div>
                  Mostrando 1-5 de 5 resultados
                </div>
                <nav aria-label="Paginación">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Anterior</a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">Siguiente</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </>
          )}
          
          {/* Contenido de la pestaña Productos */}
          {activeTab === 'productos' && (
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productos.map(producto => (
                        <tr key={producto.id}>
                          <th scope="row">{producto.id}</th>
                          <td>{producto.nombre}</td>
                          <td>${producto.precio.toLocaleString()}</td>
                          <td>{producto.stock}</td>
                          <td>{producto.categoria}</td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary me-1">
                              <i className="fas fa-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-secondary me-1">
                              <i className="fas fa-edit"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
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
          
          {/* Contenido de la pestaña Clientes */}
          {activeTab === 'clientes' && (
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Contacto</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clientes.map(cliente => (
                        <tr key={cliente.id}>
                          <th scope="row">{cliente.id}</th>
                          <td>{cliente.nombre}</td>
                          <td>{cliente.contacto}</td>
                          <td>{cliente.telefono}</td>
                          <td>{cliente.correo}</td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary me-1">
                              <i className="fas fa-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-secondary me-1">
                              <i className="fas fa-edit"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
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
          
          {/* Contenido de la pestaña Informes */}
          {activeTab === 'informes' && (
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-header">
                    Ventas mensuales
                  </div>
                  <div className="card-body">
                    <div className="text-center p-5 text-muted">
                      <i className="fas fa-chart-bar fa-3x mb-3"></i>
                      <p>Gráfico de barras de ventas mensuales</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-header">
                    Distribución por productos
                  </div>
                  <div className="card-body">
                    <div className="text-center p-5 text-muted">
                      <i className="fas fa-chart-pie fa-3x mb-3"></i>
                      <p>Gráfico circular de distribución de ventas por producto</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-header">
                    Clientes principales
                  </div>
                  <div className="card-body">
                    <div className="text-center p-5 text-muted">
                      <i className="fas fa-users fa-3x mb-3"></i>
                      <p>Gráfico de los clientes con mayor volumen de compras</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-header">
                    Tendencia de ventas
                  </div>
                  <div className="card-body">
                    <div className="text-center p-5 text-muted">
                      <i className="fas fa-chart-line fa-3x mb-3"></i>
                      <p>Gráfico de línea de tendencia de ventas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GestionVentas;