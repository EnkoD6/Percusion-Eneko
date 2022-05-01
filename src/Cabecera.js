import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import Navbar from './components/navbar/Navbar';

function Cabecera(){
    return(
    <>
      <header id='header'>
        <div class='header'>
          <Navbar /> 
          <div class='titulo'>
            <h1>Percusión Eneko</h1>
          </div>
          <div class='login'>
            <label for='loginBtn'>Login</label>
            <Link to="/login" className='loginBtn'>
              <AiIcons.AiOutlineLogin />
            </Link>
          </div>
        </div>
      </header>
    </>
    )
  }

export default Cabecera;