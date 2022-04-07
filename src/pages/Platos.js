import { useState, useEffect } from 'react';

function Platos(){
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
            <div key = {index}>
                <h3>{p.Marca}</h3>
                <h4>{p.Modelo}</h4>
                <p>{p.Precio}</p>
                <p>ID: {p._id}</p>
                <img src={p.Imagen} alt={p.Modelo}/>
            </div>)})
        

    return(
        <>
        <h2>Platos</h2>
        <p>Aquí podrás encontrar todos los platos disponibles en nuestro catálogo.</p>
        {plato}
        </>  
    )    
}

export default Platos;