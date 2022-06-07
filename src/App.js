import React from "react"
import './App.css';
import { Navbar } from "./components/Navbar";
import { Body } from "./components/Body";

function App() {
  
  return (
    <div className="App">
      <div>Hello</div>
    
        <Navbar/>
        <Body/>
    
      
       
      
      
    </div>
  );
}

export default App;

//1 Create context
//2 Create provider
//3 Wrap application in provider
//4 use the info anywhere using useContext