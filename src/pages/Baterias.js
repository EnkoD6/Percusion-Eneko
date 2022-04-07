import { useState, useEffect } from 'react';

function Baterias(){
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
            <div key = {index}>
                <h3>{b.Marca}</h3>
                <h4>{b.Modelo}</h4>
                <p>{b.Precio}</p>
                <p>ID: {b._id}</p>
                <img src={b.Imagen} alt={b.Modelo}/>
            </div>)})
        
    return(
        <>
        <h2>Baterías</h2>
        <p>Aquí podrás encontrar todas las baterías disponibles en nuestro catálogo.</p>
        {bateria}
        </>
    )
}

export default Baterias;