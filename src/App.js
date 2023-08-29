import './App.css';
import React from 'react';
import Header from "./Components/Header/Header.js";
import Home from "./Components/Home/Home.js";
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header/>
      </div>
      <div className="Home">
        <Home/>
      </div>
      <div className="Services">
        <Services/>
      </div>
    </div>

  );
}

export default App;
