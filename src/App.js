import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cabecera from './pages/Cabecera'
import Navbar from './components/Navbar';
import Login from './pages/Login'
import Inicio from './pages/Inicio'
import Baterias from './pages/Baterias'
import Platos from './pages/Platos'
import Hardware from './pages/Hardware'
import Baquetas from './pages/Baquetas'
import SegundaMano from './pages/SegundaMano'
import Footer from './pages/Footer'


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Cabecera />
        <Routes>
          <Route path='/Login' element={<Login />}/>
          <Route path='/' element={<Inicio />}/>
          <Route path='/Baterias' element={<Baterias />}/>
          <Route path='/Platos' element={<Platos />}/>
          <Route path='/Hardware' element={<Hardware />}/>
          <Route path='/Baquetas' element={<Baquetas />}/>
          <Route path='/SegundaMano' element={<SegundaMano />}/>
        </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
