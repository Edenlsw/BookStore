import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";


function App() {
  return (
    <div className="App">
      <Product
        name="Cirque-Du-Freak"
        author="Darren Shan"
        price="£5.94"
        description="The chilling Saga of Darren Shan, the ordinary schoolboy plunged into the vampire world. Darren goes to a banned freak show with his best mate Steve. It's the wonderfully gothic Cirque Du Freak where weird, frightening half human/half animals appear who interact terrifyingly with the audience."
        src="https://assets.whsmith.co.uk/product-image/extra-large/9780006755135-10-000_1.jpg"
        alt="Cirque-Du-Freak Book 1"
        
      />

      <Product
        name="Vampire's Assistant"
        author="Darren Shan"
        price="£5.94"
        description="Darren Shan has been made a half-vampire by Mr Crepsley, but the Cirque Du Freak holds more unpleasant surprises for the vampire's assistant. Darren joins the vampire, Mr Crepsley, as his assistant and they return to the Cirque Du Freak."
        src="https://assets.whsmith.co.uk/product-image/extra-large/9780006755135-10-000_1.jpg"
        alt="BOOK 2"
        
      />
    </div>
  );
}

export default App;

{
  /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        function App() {
          return (
            <div className="App">
              <Product/>
            </div>
          );
        }
      </header> */
}
