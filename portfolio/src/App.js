import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import BackgroundVideo from './components/backGround';
import HomeBody from './components/homeBody';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
    <BackgroundVideo />
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomeBody/> }></Route>
        <Route path='/About' element= { <About/> } ></Route>
        <Route path='/Contact' element= { <Contact/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
