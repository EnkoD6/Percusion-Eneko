import React from 'react'
import * as BsIcons from 'react-icons/bs'
import * as AiIcons from 'react-icons/ai'

function Footer(){
    return(
        <>
        <footer id='footer'>
            <div class='datosEmpresa'>
                <h3>Percusión Eneko S.L.</h3>
                <p>Calle Falsa 123</p>
                <p>Bilbao, Bizkaia</p>
                <p>48004</p>
                <p>&copy;2022</p>
            </div>
            <div class='rrss'>
                <a href='https://github.com/EnkoD6' class='rrssIcon'><BsIcons.BsGithub/></a>
                <a href='http://www.linkedin.com/in/eneko-olabarria-señoran-8b8b8015b' class='rrssIcon'><BsIcons.BsLinkedin/></a>
                <a href='mailto:enekolabarria@gmail.com' class='rrssIcon'><AiIcons.AiOutlineMail/></a>
            </div>
        </footer>
        </>
    )
}

export default Footer;