import { Route, Routes } from "react-router-dom";
import GridCard from "../componenti/GridCard";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/products" element={<GridCard/>}></Route> 
        </Routes>
    )
}