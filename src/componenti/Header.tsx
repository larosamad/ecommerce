import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import RoundedButton from "./RoundedButton";
import CartIcon from "../assets/shopping-cart.svg";
// import "../css/Header.css";

export function Header() {
    const {totalItems} = useCart();
    const navigate = useNavigate();

    return (
        <header className="header">
            <div>
                <h1>She beauty</h1>
            </div>
            
            <div className="right-button">
                <RoundedButton
                    label={totalItems >0 ?totalItems.toString() : "0"}
                    icon={CartIcon}
                    onClick={()=>{
                        navigate("/cart");
                    }}
                    />
            </div>
        </header>
    ) 
}