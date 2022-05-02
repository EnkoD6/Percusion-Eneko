import { Link } from 'react-router-dom'

function PagoCompleto(){
    setInterval(function () {myTimer()}, 5000);

    function myTimer() {
    window.location='http://localhost:3000/'
}
    if (localStorage.getItem('login')) {
        
    } else {
        return(
        <>
        <div className='noAccess'>
        <h3>No tienes acceso</h3>
        <p>Por favor logeate o registrate si todavia no lo has hecho.</p>
        <img src='https://i.etsystatic.com/20369550/r/il/744c62/1948711877/il_fullxfull.1948711877_sq79.jpg' alt='you shall not pass' class='accessDenied'/>
        </div>
    </>
        )}
    return(
        <>
        <div class='top'>
            <h3>Su pago se ha completado con exito</h3>
        </div>
        <div class='backInicio'>
            <div>
                <h3>Pago aceptado, redireccionando al inicio.</h3>
            </div>
        </div>
        </>
    )
}

export default PagoCompleto;