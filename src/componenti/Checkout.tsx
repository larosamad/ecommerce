import React from "react";
import { useCart } from "../context/CartContext";
import RoundedButton from "./RoundedButton";
import "../css/Checkout.css"; 

export default function Checkout() {
    const { cart, clearCart } = useCart();

    const handlePayment = () => {
        console.log("Pagato!");
        clearCart();
    };

    const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.amount, 0);

    return (
        <div>
            <h1>Checkout</h1>
            <div className="checkout-summary">
                <h2>Order Summary</h2>
                <div>
                    {cart.map((item) => (
                        <div className="flex flex-around" key={item.product.id}>
                            <div className="flex-child">
                                <div>
                                    <h3>{item.product.name}</h3>
                                    <p>Price: {item.product.price}€</p>
                                    <p>Quantity: {item.amount}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h2>Total Price: {totalPrice.toFixed(2)}€</h2>
                </div>
            </div>

            <div className="checkout-form">
                <h2>Shipping Information</h2>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" defaultValue="John Doe" />
                    </div>
                    <div>
                        <label>Address</label>
                        <input type="text" name="address" defaultValue="123 Main St" />
                    </div>
                    <div>
                        <label>City</label>
                        <input type="text" name="city" defaultValue="Anytown" />
                    </div>
                    <div>
                        <label>Postal Code</label>
                        <input type="text" name="postalCode" defaultValue="12345" />
                    </div>
                    <div>
                        <label>Country</label>
                        <input type="text" name="country" defaultValue="Country" />
                    </div>
                </form>

                <h2>Payment Information</h2>
                <form>
                    <div>
                        <label>Card Number</label>
                        <input type="text" name="cardNumber" defaultValue="4111 1111 1111 1111" />
                    </div>
                    <div>
                        <label>Expiry Date</label>
                        <input type="text" name="expiryDate" defaultValue="12/25" />
                    </div>
                    <div>
                        <label>CVV</label>
                        <input type="text" name="cvv" defaultValue="123" />
                    </div>
                </form>
            </div>

            <div className="checkout-actions">
                <RoundedButton label="Confirm Payment" onClick={handlePayment} />
            </div>
        </div>
    );
}
