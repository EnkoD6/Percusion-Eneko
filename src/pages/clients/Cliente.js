import { Link, Outlet } from 'react-router-dom'

function Cliente(){
    return(
        <>
        <div>
            <h2>Área de Clientes</h2>
        </div>
        <nav>
            <Link to='Datos'><button>Modificar datos</button></Link>
            <Link to='/Carrito'><button>Carrito</button></Link>
        </nav>
        <Outlet />
        </>
    )
}

export default Cliente;