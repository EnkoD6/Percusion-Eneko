import { useState, useEffect } from 'react';
import * as GrIcons from 'react-icons/gr';

function Hardware(){
    function carro(h){
        if(localStorage.getItem('carrito')){
            let locales = localStorage.getItem('carrito');
            let local = JSON.parse(locales)
            local.push(h)
            localStorage.setItem('carrito', JSON.stringify(local))
        }   else {
            localStorage.setItem('carrito', JSON.stringify([h]))
        }
    }

    let [hardware, setHardware] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/Hardware')
        .then(response=>response.json())
        .then(function(res){
            setHardware(res)
        })
    },[])
        let hard = hardware.map((h, index)=>{
            return (
            <div key = {index} class='objeto'>
                <div>
                    <img src={h.Imagen} alt={h.Modelo} class='imagenObjeto'/>
                </div>
                <div class='infoObjeto'>
                    <h3>{h.Marca}</h3>
                    <h4>{h.Modelo}</h4>
                    <p>{h.Precio}€</p>
                    <p>ID: {h._id}</p>
                    <label for='cartBtn'>Añadir al carrito</label>
                    <button className='cartBtn' onClick={()=>carro(h)}><GrIcons.GrCart/></button>
                </div>
            </div>)})
        

    return(
        <>
        <div class='top'>
            <h2>Hardware</h2>
            <p>Aquí podrás encontrar todo el hardware disponible en nuestro catálogo.</p>
        </div>
        <div class='fondoObjetos'>
            {hard}
        </div>
        </>
    )
}

export default Hardware;