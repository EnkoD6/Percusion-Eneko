import { Link, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Login(){
    let [user, setUser] = useState();

    function loginUser(){
        
        let username = document.querySelector('#logusername').value;
        let password = document.querySelector('#logpassword').value;
        
        user = {
                username,
                password
            }
            
            let data = {
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(user)
            }
            
            fetch('http://localhost:3001/Clientes/Login', data)
            .then(response=>response.json())
            .then(function(res){
            alert(res.message);
            localStorage.setItem('login', 'ok')   
            window.location.reload()
        })
    }     
    
    function logout(){
        localStorage.removeItem('login', 'ok')
    }

if (localStorage.getItem('login')) {
    return(
        <>
                <h2>Bienvenido al Área de Clientes</h2>
                <p>Pulsa el boton para hacer logout</p>
                <button onClick={logout()} id='logout'>Logout</button>
            </>
            )
        } else {
            return(
            <>
            <div class='top'>
                <h2>Bienvenido al Área de Clientes</h2>
                <p>Por favor, introduce tu nombre de usuario y contraseña, en caso de no estar registrado pulsa el boton de la parte inferior para poder registrarte.</p>
            </div>
            <div class='logReg'>
                <h4>Nombre de Usuario</h4>
                <input type="text" id='logusername'/>
                <h4>Contraseña</h4>
                <input type="password" id='logpassword'/>
                <button onClick={loginUser} id='logbtn'>Enviar</button>
                <nav>
                    <Link to='Registro'><button>Registro</button></Link>
                </nav>
            </div>
            <Outlet />
        </>
    )
    }
}

export default Login;