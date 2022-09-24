
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' exact element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/service' element={<Services/>} />
          <Route path='/about' element={<About/>} />
          

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
