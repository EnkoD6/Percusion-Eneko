import { useState, useEffect } from 'react';
import * as GrIcons from 'react-icons/gr';

function Platos(){
    function carro(p){
        if(localStorage.getItem('carrito')){
            let locales = localStorage.getItem('carrito');
            let local = JSON.parse(locales)
            local.push(p)
            localStorage.setItem('carrito', JSON.stringify(local))
        }   else {
            localStorage.setItem('carrito', JSON.stringify([p]))
        }
    }

    let [platos, setPlatos] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/Platos')
        .then(response=>response.json())
        .then(function(res){
            setPlatos(res)
        })
    },[])
        let plato = platos.map((p, index)=>{
            return (
            <div key = {index} class='objeto'>
                <div>
                    <img src={p.Imagen} alt={p.Modelo} class='imagenObjeto'/>
                </div>
                <div class='infoObjeto'>
                    <h3>{p.Marca}</h3>
                    <h4>{p.Modelo}</h4>
                    <p>{p.Precio}€</p>
                    <p>ID: {p._id}</p>
                    <label for='cartBtn'>Añadir al carrito</label>
                    <button className='cartBtn' onClick={()=>carro(p)}><GrIcons.GrCart/></button>
                </div>
            </div>)})
        

    return(
        <>
        <div class='top'>
            <h2>Platos</h2>
            <p>Aquí podrás encontrar todos los platos disponibles en nuestro catálogo.</p>
        </div>
        <div class='fondoObjetos'>
            {plato}
        </div>
        </>  
    )    
}

export default Platos;