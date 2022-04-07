import React from 'react'
import * as BsIcons from 'react-icons/bs'

function Footer(){
    return(
        <>
        <footer>
            <div>
                <h3>Percusión Eneko S.L.</h3>
                <p>Calle Falsa 123</p>
                <p>Bilbao, Bizkaia</p>
                <p>48004</p>
                <p>&copy;2022</p>
            </div>
            <div>
                <a href='https://github.com/EnkoD6'><BsIcons.BsGithub/></a>
                <a href='http://www.linkedin.com/in/eneko-olabarria-señoran-8b8b8015b'><BsIcons.BsLinkedin/></a>
            </div>
        </footer>
        </>
    )
}

export default Footer;