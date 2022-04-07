import { useState, useEffect } from 'react';

function Editar(){

    let [objeto, setObjeto] = useState([]);
    useEffect(()=>{

        document.querySelector('#btn').addEventListener('click', function(){
            let marca = document.querySelector('#marca').value;
            let modelo = document.querySelector('#modelo').value;
            let precio = document.querySelector('#precio').value;
    
            objeto = {
                marca,
                modelo,
                precio
            }
        
        
        let data = {
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(objeto)
        }

        fetch('http://localhost:3001/SegundaMano', data)
        .then(response=>response.json())
        .then(function(res){
            setObjeto(res)
        })})
    },[])

    
    return(
        <>
            <h3>Editar un anuncio:</h3>
            <label for='buscarID'>Buscar por ID:</label>
            <input type='text' id='buscarID'/>
            <label for='anuncio'>Seleccionar anuncio:</label>
            <select name='anuncio' id='anuncio'></select>
        </>
    )
}

export default Editar;