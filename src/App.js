import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import About from './Components/About';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    
    <Router>
      <Sidebar/>
      <Routes>
        <Route exact path='/' element={ <Home/>}/>
        <Route exact path='/#about' element={ <About/>}/>
        <Route exact path='/#education' element={ <Education/>}/>
        <Route exact path='/#projects' element={ <Projects/>}/>
        <Route exact path='/#contact' element={ <Contact/>}/>
     
      </Routes>
     
      <About/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>
  </Router> 
    {/* <Router>
      <Sidebar/>
      <Home/>
      <About/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>
  </Router> */}
  </>
  );
}

export default App;
