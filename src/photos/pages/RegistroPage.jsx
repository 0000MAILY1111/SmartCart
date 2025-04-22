import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const RegistroPage = () => {

    const navigate = useNavigate();
    const onRegister = () => {
        navigate('/home', { replace: true });
    };
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="col-md-4">
                    <h1 className="text-center mb-4">Registro</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="inputNombre">Nombre</label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="inputNombre"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail">Correo Electrónico</label>
                            <input
                                type="email"
                                className="form-control mb-3"
                                id="inputEmail"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword">Contraseña</label>
                            <input
                                type="password"
                                className="form-control mb-3"
                                id="inputPassword"
                                placeholder="Password"
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary w-100 mb-3"
                            onClick={onRegister}
                        >
                            Registrarse
                        </button>
                        <p className="mt-4" style={{ color: '#393f81' }}>
                            ¿Ya tienes cuenta? <Link to="/login" style={{ color: '#393f81' }}>Inicia sesión aquí</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};
export default RegistroPage;

/*import React from 'react'
<button className="btn btn-primary"
onClick={onLogin}
     PAGINA DE REGISTRO 
>Login</button>=*/