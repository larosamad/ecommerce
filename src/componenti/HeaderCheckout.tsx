import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import RoundedButton from "./RoundedButton";
import CartIcon from "../assets/shopping-cart.svg";
import "../css/HeaderCheckout.css";

export function HeaderCheckout() {
    const {totalItems} = useCart();
    const navigate = useNavigate();

    return (
        <header className="pink-header">
            <figure>
                <img src="https://i.imgur.com/4Dp258g.png" alt="She Beauty" />
            </figure>
            
            <div className="right-button">
                <RoundedButton
                    label={"Return to cart"}
                    icon={CartIcon}
                    onClick={()=>{
                        navigate("/cart");
                    }}
                    />
            </div>
        </header>
    ) 
}