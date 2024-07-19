import { useCart } from "../context/CartContext";
import { Product } from "../interface/productInterface";
import { useNavigate } from "react-router-dom";
import MiniButton from "./MiniButton";
import "../css/RoundedButton.css";
import "../css/Cart.css";

import RoundedButton from "./RoundedButton";

export default function Cart() {
    const { cart, removeFromCart, clearCart, updateCartQuantity } = useCart();
    const navigate = useNavigate();

    const handleRemoveFromCart = (product: Product) => {
        removeFromCart(product);
    };

    const handleIncreaseQuantity = (product: Product) => {
        updateCartQuantity(product, 1); // Aumenta la quantità di 1
    };

    const handleDecreaseQuantity = (product: Product) => {
        updateCartQuantity(product, -1); // Diminuisci la quantità di 1
    };

    const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.amount, 0);

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item: { product: Product; amount: number }) => (
                        <div key={item.product.id} className="cart-item">
                            <div className="flex flex-around">
                                <div className="flex-child">
                                    <figure>
                                        <img
                                            src={item.product.image}
                                            alt={item.product.name}
                                        />
                                    </figure>
                                    <div>
                                        <h3>{item.product.name}</h3>
                                        <p>Price: {item.product.price}€</p>
                                    </div>
                                </div>
                                <div className="flex-center quantity-controls">
                                    <MiniButton
                                        label="-"
                                        onClick={() => handleDecreaseQuantity(item.product)}
                                    />
                                    <span className="quantity">{item.amount}</span>
                                    <MiniButton
                                        label="+"
                                        onClick={() => handleIncreaseQuantity(item.product)}
                                    />
                                    <RoundedButton
                                        label="Remove"
                                        onClick={() => handleRemoveFromCart(item.product)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    <div>
                        <h2>Total Price: {totalPrice.toFixed(2)}€</h2>
                    </div>

                    <div className="flex medium-size">
                        <RoundedButton
                            className="RoundedButton"
                            label="Clear Cart"
                            onClick={clearCart}
                        />
                        <RoundedButton
                            label="Checkout"
                            onClick={() => {
                                navigate("/checkout");
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
