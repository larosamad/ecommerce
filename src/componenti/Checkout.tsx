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
        <div className="grid">
            <div className="checkout-summary text-left">
                <h1>Checkout</h1>
                <h2>Order Summary</h2>
                <div>
                    {cart.map((item) => (
                        <div className="flex flex-start">
                            <div className="flex-child">
                                <figure className="margin-0">
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
                        <input type="text" name="name" placeholder="John Doe" />
                    </div>
                    <div>
                        <label>Address</label>
                        <input type="text" name="address" placeholder="123 Main St" />
                    </div>
                    <div>
                        <label>City</label>
                        <input type="text" name="city" placeholder="Anytown" />
                    </div>
                    <div>
                        <label>Postal Code</label>
                        <input type="text" name="postalCode" placeholder="12345" />
                    </div>
                    <div>
                        <label>Country</label>
                        <input type="text" name="country" placeholder="Country" />
                    </div>
                </form>

                <h2>Payment Information</h2>
                <form>
                    <div>
                        <label>Card Number</label>
                        <input type="text" name="cardNumber" placeholder="4111 1111 1111 1111" />
                    </div>
                    <div>
                        <label>Expiry Date</label>
                        <input type="text" name="expiryDate" placeholder="12/25" />
                    </div>
                    <div>
                        <label>CVV</label>
                        <input type="text" name="cvv" placeholder="123" />
                    </div>
                </form>            
                
                <div className="checkout-actions">
                <RoundedButton label="Confirm Payment" onClick={handlePayment} />
                </div>

            </div>


        </div>
    );
}
