import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  // inline style
  const h1style = {"fontSize": "100px", "color": "#a6b1e1", "textDecoration": "underline", "textDecoration": "uppercase"}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* inline style */}
        <h1 style= {h1style}> 
         This is my first app!
        </h1>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}



      </header>
    </div>
  );
}

export default App;
