import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Checkout(){
    let [total, setTotal] = useState(-1)
    let local = []
    if (localStorage.getItem('carrito')) {
        
        local = JSON.parse(localStorage.getItem('carrito'))
    }
    console.log(local);

    let carrito = <></>
    if (local.length == 0) {
        carrito = <p>carrito vacio</p>
    } else {
    carrito = local.map((carro, index)=>{
        return(
            <div key = {index}>
                <div>
                    <h3>{carro.Marca}</h3>
                    <h4>{carro.Modelo}</h4>
                    <p>{carro.Precio}€</p>
                    <p>ID: {carro._id}</p>
                </div>
            </div>
        )
    })
    }
    
    let [user, setUser] = useState([]);
    useEffect(()=>{

            
        let totalAmount = local.reduce((total, currentValue) => total = total + currentValue.Precio,0);
        setTotal(totalAmount)

        let data = {
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({amount:totalAmount})
        }

        fetch('http://localhost:3001/stripe/create-payment-intent', data)
        .then(response=>response.json())
        .then(function(res){
            console.log(res);
        })
    },[])
    if (localStorage.getItem('login')) {
        
    } else {
        return(
        <>
        <div className='noAccess'>
            <h3>No tienes acceso</h3>
            <p>Por favor logeate o registrate si todavia no lo has hecho.</p>
            <img src='https://i.etsystatic.com/20369550/r/il/744c62/1948711877/il_fullxfull.1948711877_sq79.jpg' alt='you shall not pass' class='noAccessImg'/>
        </div>
    </>
        )   
    }

    return(
    <>
        <div class='top'>
            <h3>Checkout</h3>
        </div>
        <div class='resumenYDireccion'>
            <div class='resumenCarrito'>
                <div>
                    <h4>Resumen del carrito:</h4>
                </div>
                <div>
                    {carrito}
                </div>
                <div>
                    <h4>Total:</h4>
                    <p>{total}€</p>
                </div>
            </div>
            <div class='direccion'>
                    <h4>Dirección:</h4>
                <div class='direccionDatos'>
                    <p>Calle y portal</p>
                    <input type="text"id='calle'/>
                    <p>Piso, puerta, otros datos</p>
                    <input type="text" id='piso'/>
                    <p>Código postal</p>
                    <input type='number' maxlength="5" size='5' id='codigoPostal'/>
                    <p>Localidad</p>
                    <input type='text' id='localidad'/>
                    <div>
                        <input type="checkbox" id='terminos'/><label for='terminos'>Aceptar terminos y condiciones</label>
                    </div>
                    <div>
                        <Link to='/Pago'><button type='submit' id='checkbtn'>Continuar con el pago</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
    )}

export default Checkout;