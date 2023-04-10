
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import './App.css'


function App() {
  return (
      <div>    
          <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about"  element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path="/contact"  element={<Contact />} />
          </Routes>
      </div>
  
  );
}

export default App;