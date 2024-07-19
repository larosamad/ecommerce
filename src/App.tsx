import { BrowserRouter, useLocation } from "react-router-dom";
import "./App.css";
import MainRoutes from "./routes/mainRoutes";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { Header } from "./componenti/Header";
import { HeaderCheckout } from "./componenti/HeaderCheckout";
import { Footer } from "./componenti/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <ConditionalHeader />
            { /*BrowserRouter permette al componente MainRouter di funzionare*/}
            <MainRoutes />
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

function ConditionalHeader() {
  const location = useLocation();

  if (location.pathname === "/checkout") {
    return <HeaderCheckout />;
  }

  return <Header />;
}

export default App;
