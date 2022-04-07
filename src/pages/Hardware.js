import { useState, useEffect } from 'react';

function Hardware(){
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
            <div key = {index}>
                <h3>{h.Marca}</h3>
                <h4>{h.Modelo}</h4>
                <p>{h.Precio}</p>
                <p>ID: {h._id}</p>
                <img src={h.Imagen} alt={h.Modelo}/>
            </div>)})
        

    return(
        <>
        <h2>Hardware</h2>
        <p>Aquí podrás encontrar todo el hardware disponible en nuestro catálogo.</p>
        {hard}
        </>
    )
}

export default Hardware;