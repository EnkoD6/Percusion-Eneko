import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';
import Checkout from './Checkout';

function Carrito(){
    let local = []
    if (localStorage.getItem('carrito')) {
        
        local = JSON.parse(localStorage.getItem('carrito'))
    }
    console.log(local);

    function eliminarObjeto(id){
        if(localStorage.getItem('carrito')){
            let carroLocal = JSON.parse(localStorage.getItem('carrito'));
            console.log(carroLocal);
            carroLocal.forEach((element, i) => {
                if (id == element._id) {
                    carroLocal.splice(i,1)
                }
            });
            localStorage.setItem('carrito', JSON.stringify(carroLocal))
            window.location.reload()
        }
    }

    let carrito = <></>
    if (local.length == 0) {
        carrito = <p>carrito vacio</p>
    } else {
    carrito = local.map((carro, index)=>{
        return(
            <div key = {index} class='objeto'>
                <div>
                    <img src={carro.Imagen} alt={carro.Modelo} class='imagenObjeto'/>
                </div>
                <div class='infoObjeto'>
                    <h3>{carro.Marca}</h3>
                    <h4>{carro.Modelo}</h4>
                    <p>{carro.Precio}€</p>
                    <p>ID: {carro._id}</p>
                    <button className='removeBtn' onClick={()=>eliminarObjeto(carro._id)}>Eliminar objeto del carrito</button>
                </div>
            </div>
        )
    })
    }
    function limpiar(){
        localStorage.clear();
        window.location.reload();
    }

    let total = local.reduce((total, currentValue) => total = total + currentValue.Precio,0);
    
    return(
        <>
            <div class='top'>
                <h2>Resumen de su carrito:</h2>
            </div>
            <div class='fondoObjetos'>
                {carrito}
            <div class='panelCarrito'>
                <div class='total'>
                    <h4>Total:</h4>
                    <p>{total}€ (iva incluido)</p>
                </div>
                <div class='vaciar'>
                    <button className='cartBtn' onClick={limpiar}><BsIcons.BsFillCartXFill /> Vaciar el carrito</button>
                </div>
                <Link to='/Checkout'><button class='toCheck'>Checkout</button></Link>
            </div>
            </div>
        </>
    )
}

export default Carrito;