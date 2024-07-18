import { BrowserRouter, useLocation } from "react-router-dom";
import "./App.css";
import MainRoutes from "./routes/mainRoutes";
import { CartProvider } from "./context/CartContext";
import { Header } from "./componenti/Header";
import { Footer } from "./componenti/Footer"

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <ConditionalHeader/>
            { /*BrowserRouter permette al componente MainRouter di funzionare*/}
            <MainRoutes/>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

function ConditionalHeader() {
  const location = useLocation()

  if (location.pathname === "/checkout") {
    return null
  }

  return <Header />
}

export default App;

