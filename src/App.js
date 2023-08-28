import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Header from './componets/Hero';
import Hero from './componets/Hero';
import { Route, Routes } from "react-router-dom";
import AboutMe from './componets/AboutMe';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-gray-200 pt-2">
    <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
  
    </div>
  );
}

export default App;
