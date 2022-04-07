import { useState, useEffect } from 'react';

function Anadir(){

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
        })
        
        })
    },[])

    
    return(
        <>
            <h3>Crea un nuevo anuncio:</h3>
            <label for="marca">Marca</label>
            <input type='text' id='marca'/>
            <label for="modelo">Modelo</label>
            <input type='text' id='modelo'/>
            <label for="precio">Precio</label>
            <input type='text' id='precio'/>
            {/* <label for="imagen">Imagen</label> */}
            <button type='submit' id='btn'>Públicar</button>
        </>
    )
}

export default Anadir;