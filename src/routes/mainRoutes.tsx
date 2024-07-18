import { Route, Routes } from "react-router-dom";
import GridCard from "../componenti/GridCard";
import Cart from "../componenti/Cart";
import Checkout from "../componenti/Checkout";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/products" element={<GridCard/>}></Route> 
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/checkout" element={<Checkout />}></Route> 
        </Routes>
    )
}