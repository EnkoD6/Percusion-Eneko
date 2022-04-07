import { Link, Outlet } from 'react-router-dom'

function Login(){
    return(
        <>
            <div>
                <h2>Bienvenido al Área de Clientes</h2>
                <p>Por favor, introduce tu nombre de usuario y contraseña, en caso de no estar registrado pulsa el boton de la parte inferior para poder registrarte.</p>
            </div>
            <div>
                <h4>Nombre de Usuario</h4>
                <input type="text"/>
                <h4>Contraseña</h4>
                <input type="text"/>
                <button type='submit'>Enviar</button>
            </div>
            <nav>
                <Link to='Registro'><button>Registro</button></Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Login;