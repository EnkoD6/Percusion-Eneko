import { useState, useEffect } from 'react';

function Registro(){

    let [user, setUser] = useState([]);
    useEffect(()=>{

        document.querySelector('#btn').addEventListener('click', function(){
            let username = document.querySelector('#username').value;
            let password = document.querySelector('#password').value;
            let role = "client"

            user = {
                username,
                password,
                role
            }

        let data = {
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
        }

        fetch('http://localhost:3001/Clientes', data)
        .then(response=>response.json())
        .then(function(res){
            alert(res.message);
            window.location.reload()
        })
    })
    },[])

    return(
        <>
            <div>
                <h2>Registro</h2>
                <p>Por favor, introduce tu nombre de usuario y contraseña.</p>
            </div>
            <div>
                <h4>Nombre de Usuario</h4>
                <input type="text" id='username'/>
                <h4>Contraseña</h4>
                <input type="password" id='password'/>
                <button type='submit' id='btn'>Enviar</button>
            </div>
        </>
    )
}

export default Registro;