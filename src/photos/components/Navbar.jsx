import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Componente Navbar mejorado
const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    // Cierra el dropdown cuando se hace clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isDropdownOpen && !event.target.closest('.btn-group')) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 fixed-top">
            <div className="container-fluid">
                {/* Botón de hamburguesa para el sidebar */}
                <button 
                    className="btn btn-dark d-lg-none me-2" 
                    onClick={toggleSidebar}
                    type="button"
                >
                    <i className="fas fa-bars"></i>
                </button>
                
                {/* Logo o título */}
                <a className="navbar-brand d-none d-lg-block" href="#">Mi Aplicación</a>

                {/* Botón de menú desplegable */}
                <div className="btn-group me-2">
                    <button 
                        type="button" 
                        className="btn btn-secondary dropdown-toggle"
                        onClick={toggleDropdown} 
                        aria-haspopup="true" 
                        aria-expanded={isDropdownOpen}
                    >
                        Menú
                    </button>
                    <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} style={{ position: 'absolute' }}>
                        <button className="dropdown-item" type="button">Opcion1</button>
                        <button className="dropdown-item" type="button">Opcion2</button>
                        <button className="dropdown-item" type="button">Opcion3</button>
                    </div>
                </div>

                {/* Botón de hamburguesa para navegación */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded={!isNavCollapsed} 
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Contenido colapsable del navbar */}
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/catalogo">
                                Catalogo
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/Ventas">
                                Ventas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/editar">
                                Editar
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/vista">
                                Vista
                            </NavLink>
                        </li>
                    </ul>
                    
                    {/* Botón de Logout alineado a la derecha */}
                    <div className="d-flex">
                        <NavLink className="nav-link" to="/login">
                            Logout
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;