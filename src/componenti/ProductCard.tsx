import { Product } from "../interface/productInterface";
import RoundedButton from "./RoundedButton";
import {useCart} from "../context/CartContext";
import {useState} from "react";

export default function ProductCard({ product }: { product: Product }){
    //const handleAddToCart = () => {
        //console.log("Ciao");
        const[amount, setAmount]=useState(1);
        const{addToCart}=useCart();
       
    
    return (
        

        <>

        <div>
            <img src={product.image} alt={product.name}/>
            <h3> {product.name}</h3>
            <p> {product.price}</p>
            <p> {product.description}</p>
        </div>
        <div>
            <RoundedButton label ="Add to Cart" onClick={()=>{
                addToCart(product,amount);
                setAmount(1);
            }} 
            />
        </div>
        
        </>

    );
}