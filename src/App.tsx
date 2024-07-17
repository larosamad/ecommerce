import React from 'react';
import './App.css';
import GridCard from './componenti/GridCard';
import MainRoutes from "./routes/mainRoutes";
import { BrowserRouter } from 'react-router-dom'; //dovevamo aggiungere questa linea di codice per far funzionare Browser Router

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;

