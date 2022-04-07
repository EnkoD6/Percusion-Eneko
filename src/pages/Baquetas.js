import { useState, useEffect } from 'react';

function Baquetas(){
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
            <div key = {index}>
                <h3>{baquet.Marca}</h3>
                <h4>{baquet.Modelo}</h4>
                <p>{baquet.Precio}</p>
                <p>ID: {baquet._id}</p>
                <img src={baquet.Imagen} alt={baquet.Modelo}/>
            </div>)})
        

    return(
        <>
        <h2>Baquetas</h2>
        <p>Aquí podrás encontrar todas las baquetas disponibles en nuestro catálogo.</p>
        {baqueta}
        </>
    )
}

export default Baquetas;