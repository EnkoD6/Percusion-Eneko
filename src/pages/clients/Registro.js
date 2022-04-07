function Registro(){
    return(
        <>
            <div>
                <h2>Registro</h2>
                <p>Por favor, introduce tu nombre de usuario y contraseña.</p>
            </div>
            <div>
                <h4>Nombre de Usuario</h4>
                <input type="text"/>
                <h4>Contraseña</h4>
                <input type="text"/>
                <button type='submit'>Enviar</button>
            </div>
        </>
    )
}

export default Registro;