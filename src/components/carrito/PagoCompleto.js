import { Link } from 'react-router-dom'

function PagoCompleto(){
    if (localStorage.getItem('login')) {
        
    } else {
        return(
        <>
        <h3>No tienes acceso</h3>
        <p>Por favor logeate o registrate si todavia no lo has hecho.</p>
        <img src='https://i.etsystatic.com/20369550/r/il/744c62/1948711877/il_fullxfull.1948711877_sq79.jpg' alt='you shall not pass' class='accessDenied'/>
    </>
        )}
    return(
        <>
        <div>
            <h3>Su pago se ha completado con exito</h3>
        </div>
        <div>
            <div>
                <p>Número de Orden</p>
            </div>
            <div>
                <p>Importe</p>
            </div>
            <div>
            <Link to='/'><button class='btnInicio'>Volver al inicio</button></Link>
            </div>
        </div>
        </>
    )
}

export default PagoCompleto;