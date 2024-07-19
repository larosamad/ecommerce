import { useCart } from "../context/CartContext";
import { Product } from "../interface/productInterface";
import { useNavigate } from "react-router-dom";
import RoundedButton from "./RoundedButton";
import "../css/Cart.css";


export default function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();
    const handleRemoveFromCart = (product: Product) => {
        removeFromCart(product);
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
                        <div key={item.product.id}>
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
                                        <p>Quantity: {item.amount}</p>
                                    </div>
                                </div>
                                <div className="small-size">
                                    <RoundedButton
                                        label="Remove"
                                        onClick={() =>
                                            handleRemoveFromCart(item.product)
                                        }
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
                            label="Clear Cart"
                            onClick={clearCart}
                        />
                        <RoundedButton
                            label="Checkout"
                            onClick={() => {
                                navigate("/checkout")
                                }}
                        />
                    </div>


                </div>
            )}
        </div>
    );
}
