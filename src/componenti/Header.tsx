import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import RoundedButton from "./RoundedButton";
import "../css/Header.css";

export function Header() {
    const {totalItems} = useCart();
    const navigate = useNavigate();

    return (
        <header className="header">
            <div>
                <p>Materiale didattico-pwf</p>
            </div>
             
             <div className="right-button">
                <RoundedButton
                    label={totalItems >0 ?totalItems.toString() : "0"}
                    onClick={()=>{
                        navigate("/cart");
                    }}
                    />

             </div>
        </header>
    ) 
}