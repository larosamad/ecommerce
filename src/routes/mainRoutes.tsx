import { Route, Routes } from "react-router-dom";
import GridCard from "../componenti/GridCard";
import Cart from "../componenti/Cart";
import Checkout from "../componenti/Checkout";
import LoginPage from "../componenti/LoginPage"; 

export default function MainRoutes() {
    return (
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/products" element={<GridCard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        </Routes>
    );
}
