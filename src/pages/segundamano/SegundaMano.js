import { Link } from 'react-router-dom';

function SegundaMano(){
    return(
        <>
        <h2>Segunda Mano</h2>
        <p>Aquí podrás encontrar todos los productos de segunda mano disponibles en nuestro catálogo así como publicar tus propios anuncios para vender el equipo que ya no usas de la manera más comoda.</p>
            <div>
                <Link to="/AnunciosCliente"><button>Ver mis anuncios</button></Link>
            </div>
        </>
    )
}

export default SegundaMano;