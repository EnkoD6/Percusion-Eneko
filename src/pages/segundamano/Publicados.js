import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

function Publicados(){
    let [publicados, setPublicados] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/SegundaMano')
        .then(response=>response.json())
        .then(function(res){
            setPublicados(res)
        })
    },[])
        let publicado = publicados.map((publics, index)=>{
            return (
            <div key = {index}>
                <h3>{publics.marca}</h3>
                <h4>{publics.modelo}</h4>
                <p>{publics.precio}€</p>
                <p>ID: {publics._id}</p>
                <img src={publics.Imagen} alt={publics.Modelo}/>
            </div>)})
        

    return(
        <>
        <h2>Anuncios Públicados</h2>
        {publicado}
        <nav>
            <Link to='Editar'><button>Editar</button></Link>
            <Link to='Eliminar'><button>Borrar</button></Link>
        </nav>
        <Outlet />
        </>
    )
}

export default Publicados;