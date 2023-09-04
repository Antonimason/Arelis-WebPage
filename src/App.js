import './App.css';
import React from 'react';
import Header from "./Components/Header/Header.js";
import Home from "./Components/Home/Home.js";
import About from './Components/About/About';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header/>
      </div>
      <div className="Home width--control">
        <Home/>
      </div>
      <div className="About width--control">
        <About/>
      </div>
      <div className="Services width--control">
        <Services/>
      </div>
    </div>

  );
}

export default App;
