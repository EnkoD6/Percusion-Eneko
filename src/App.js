import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cabecera from './Cabecera'
import Login from './pages/clients/Login'
import Registro from './pages/clients/Registro'
import Inicio from './pages/Inicio'
import Carrito from './components/carrito/Carrito'
import Checkout from './components/carrito/Checkout'
import Pago from './components/carrito/Pago'
import PagoCompleto from './components/carrito/PagoCompleto';
import Baterias from './pages/Baterias'
import Platos from './pages/Platos'
import Hardware from './pages/Hardware'
import Baquetas from './pages/Baquetas'
import SegundaMano from './pages/segundamano/SegundaMano'
import AnunciosCliente from './pages/segundamano/AnunciosCliente'
import Anadir from './pages/segundamano/Anadir'
import Publicados from './pages/segundamano/Publicados'
import Editar from './pages/segundamano/Editar'
import Eliminar from './pages/segundamano/Eliminar'
import Footer from './pages/Footer'


function App() {
  return (
    <Router>
      <Cabecera />
        <Routes>
          <Route path='/Login' element={<Login />}>
            <Route path='Registro' element={<Registro />}/>
          </Route>
          <Route path='/' element={<Inicio />}/>
          <Route path='/Carrito' element={<Carrito />}/>
          <Route path='/Checkout' element={<Checkout />}/>
          <Route path='/Baterias' element={<Baterias />}/>
          <Route path='/Platos' element={<Platos />}/>
          <Route path='/Hardware' element={<Hardware />}/>
          <Route path='/Baquetas' element={<Baquetas />}/>
          <Route path='/SegundaMano' element={<SegundaMano />} />
          <Route path='/Pago' element={<Pago />}/>
          <Route path='/PagoCompleto' element={<PagoCompleto />}/>
          <Route path='/AnunciosCliente' element={<AnunciosCliente />}>
            <Route path='Anadir' element={<Anadir />} />
            <Route path='Publicados' element={<Publicados />}>
              <Route path='Editar' element={<Editar />} />
              <Route path='Eliminar' element={<Eliminar />} />
            </Route>
          </Route>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
