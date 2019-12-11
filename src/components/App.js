import React from 'react';
import CardDeck from "./CardDeck.js"
import Jumbotron from "./Jumbotron.js"
import "./App.css"
import "./CardDeck.css"
import "./Jumbotron.css"



function App() {
  return (
    <div className="App">
    
    <Jumbotron/>
    <CardDeck/>
     </div>
  );
}

export default App;
