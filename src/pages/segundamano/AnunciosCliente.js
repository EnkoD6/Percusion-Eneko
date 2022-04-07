import { Link, Outlet } from 'react-router-dom';

function AnunciosCliente(){
    return(
        <>
        <h2>Mis Anuncios</h2>
        <p>Aquí podrás encontrar los anuncios que has públicado, desde este apartado podrás públicar nuevos anuncios, ver en que estado se encuentran, modificarlos o eliminarlos.</p>
        <nav>
            <Link to='Publicados'><button>Públicados</button></Link>
            <Link to='Anadir'><button>Añadir</button></Link>
        </nav>
        <Outlet />
        </>
    )
}

export default AnunciosCliente;