import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cabecera from './pages/Cabecera'
import Navbar from './components/Navbar';
import Login from './pages/clients/Login'
import Registro from './pages/clients/Registro'
import Inicio from './pages/Inicio'
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
    <>
    <Router>
      <Navbar />
      <Cabecera />
        <Routes>
          <Route path='/Login' element={<Login />}>
            <Route path='Registro' element={<Registro />}/>
          </Route>
          <Route path='/' element={<Inicio />}/>
          <Route path='/Baterias' element={<Baterias />}/>
          <Route path='/Platos' element={<Platos />}/>
          <Route path='/Hardware' element={<Hardware />}/>
          <Route path='/Baquetas' element={<Baquetas />}/>
          <Route path='/SegundaMano' element={<SegundaMano />} />
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
    </>
  );
}

export default App;
