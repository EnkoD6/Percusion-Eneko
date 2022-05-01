import { useState, useEffect } from 'react';
import * as GrIcons from 'react-icons/gr';

function Baterias(){
    function carro(b){
        if(localStorage.getItem('carrito')){
            let locales = localStorage.getItem('carrito');
            let local = JSON.parse(locales)
            local.push(b)
            localStorage.setItem('carrito', JSON.stringify(local))
        }   else {
            localStorage.setItem('carrito', JSON.stringify([b]))
        }
    }
    let [baterias, setBaterias] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/Baterias')
        .then(response=>response.json())
        .then(function(res){
            setBaterias(res)
        })
    },[])
        let bateria = baterias.map((b, index)=>{
            return (
            <div key = {index} class='objeto'>
                <div >
                    <img src={b.Imagen} alt={b.Modelo} class='imagenObjeto'/>
                </div>
                <div class='infoObjeto'>
                    <h3>{b.Marca}</h3>
                    <h4>{b.Modelo}</h4>
                    <p>{b.Precio}€</p>
                    <p>ID: {b._id}</p>
                    <button className='cartBtn' onClick={()=>carro(b)}><GrIcons.GrCart/> Añadir al carrito</button>
                </div>
            </div>)})
        
    return(
        <>
        <div class='top'>
            <h2>Baterías</h2>
            <p>Aquí podrás encontrar todas las baterías disponibles en nuestro catálogo.</p>
        </div>
        <div class='fondoObjetos'>
            {bateria}
        </div>
        </>
    )
}

export default Baterias;