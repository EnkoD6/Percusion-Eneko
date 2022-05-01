import { useState, useEffect } from 'react';
import * as GrIcons from 'react-icons/gr';

function Baquetas(){
    function carro(baquet){
        if(localStorage.getItem('carrito')){
            let locales = localStorage.getItem('carrito');
            let local = JSON.parse(locales)
            local.push(baquet)
            localStorage.setItem('carrito', JSON.stringify(local))
        }   else {
            localStorage.setItem('carrito', JSON.stringify([baquet]))
        }
    }
    let [baquetas, setBaquetas] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/Baquetas')
        .then(response=>response.json())
        .then(function(res){
            setBaquetas(res)
        })
    },[])
        let baqueta = baquetas.map((baquet, index)=>{
            return (
            <div key = {index} class='objeto'>
                <div>
                    <img src={baquet.Imagen} alt={baquet.Modelo} class='imagenObjeto'/>
                </div>
                <div class='infoObjeto'>
                    <h3>{baquet.Marca}</h3>
                    <h4>{baquet.Modelo}</h4>
                    <p>{baquet.Precio}€</p>
                    <p>ID: {baquet._id}</p>
                    <label for='cartBtn'>Añadir al carrito</label>
                    <button className='cartBtn' onClick={()=>carro(baquet)}><GrIcons.GrCart/></button>
                </div>
            </div>)})        

    return(
        <>
        <div class='top'>
            <h2>Baquetas</h2>
            <p>Aquí podrás encontrar todas las baquetas disponibles en nuestro catálogo.</p>
        </div>
        <div class='fondoObjetos'>
            {baqueta}
        </div>
        </>
    )
}

export default Baquetas;