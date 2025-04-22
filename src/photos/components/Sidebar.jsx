import React, { useState } from 'react';

const Sidebar = () => {
    // Estado para controlar la visibilidad del sidebar en dispositivos móviles
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Función para alternar la visibilidad del sidebar
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            {/* Botón de hamburguesa visible solo en dispositivos móviles */}
            <button 
                className="btn btn-dark d-lg-none position-fixed top-0 start-0 mt-2 ms-2 z-index-1031" 
                onClick={toggleSidebar}
                style={{ zIndex: 1031 }}
            >
                <i className="fas fa-bars"></i>
            </button>

            {/* Overlay para cerrar el sidebar cuando se hace clic fuera en dispositivos móviles */}
            {sidebarOpen && (
                <div 
                    className="position-fixed top-0 start-0 w-100 h-100 bg-dark d-lg-none" 
                    onClick={toggleSidebar}
                    style={{ opacity: 0.5, zIndex: 1030 }}
                ></div>
            )}

            {/* Sidebar con clases responsivas */}
            <nav 
                id="sidebarMenu" 
                className={`sidebar bg-dark ${sidebarOpen ? 'show' : ''} d-lg-block`}
                style={{ 
                    width: '250px', 
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    zIndex: 1030,
                    transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.3s ease-in-out',
                    overflowY: 'auto'
                }}
            >
                <div className="position-sticky">
                    {/* Botón de cierre visible solo en dispositivos móviles */}
                    <div className="d-flex justify-content-end d-lg-none p-2">
                        <button 
                            className="btn btn-dark border-0" 
                            onClick={toggleSidebar}
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white" aria-current="true">
                            <i className="fas fa-user fa-fw me-3"></i><span>Usuario</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white active">
                            <i className="fas fa-chart-area fa-fw me-3"></i><span>Gestion de Ventas</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                            <i className="fas fa-chart-line fa-fw me-3"></i><span>Gestion de Clientes</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                            <i className="fas fa-book fa-fw me-3"></i><span>Bibliotecas</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                            <i className="fas fa-map-marker-alt fa-fw me-3"></i><span>Espacios publicos</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                            <i className="fas fa-tree fa-fw me-3"></i><span>Areas Recreativas</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                            <i className="fas fa-school fa-fw me-3"></i><span>Colegios</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                            <i className="fas fa-shopping-mall fa-fw me-3"></i><span>Centros Comerciales</span>
                        </a>
                    </div>
                </div>
            </nav>

            <div className="content-wrapper" style={{ marginLeft: 0, transition: 'margin-left 0.3s ease-in-out' }}>
            </div>

            <style jsx>{`
                @media (min-width: 992px) {
                    .sidebar {
                        transform: translateX(0) !important;
                    }
                    .content-wrapper {
                        margin-left: 250px !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Sidebar;