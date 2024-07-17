// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import GridCard from './componenti/GridCard';
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainRoutes from "./routes/mainRoutes";
import { CartProvider } from "./context/CartContext";
import { Header } from "./componenti/header";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header/>
            { /*BrowserRouter permette al componente MainRouter di funzionare*/}
            <MainRoutes/>
        </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;

