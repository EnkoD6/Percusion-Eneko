import { Link } from 'react-router-dom';

function Cabecera(){
    return(
    <>
      <header>
        <div>
          <h1>Percusión Eneko</h1>
          <Link to="/Login"><button>Área Cliente</button></Link>
        </div>
        {/* <nav>
          <Link to="/"><button>Inicio</button></Link>
          <Link to="/Baterias"><button>Baterías</button></Link>
          <Link to="/Platos"><button>Platos</button></Link>
          <Link to="/Hardware"><button>Hardware</button></Link>
          <Link to="/Baquetas"><button>Baquetas</button></Link>
          <Link to="/SegundaMano"><button>Segunda Mano</button></Link>
        </nav> */}
      </header>
    </>
    )
  }

export default Cabecera;