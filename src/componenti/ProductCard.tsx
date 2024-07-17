import { Product } from "../interface/productInterface";
import RoundedButton from "./RoundedButton";


export default function ProductCard({ product }: { product: Product }){
    const handleAddToCart = () => {
        console.log("Ciao");
    };
    return (
        

        <>

        <div>
            <img src={product.image} alt={product.name}/>
            <h3> {product.name}</h3>
            <p> {product.price}</p>
            <p> {product.description}</p>
        </div>
        <div>
            <RoundedButton label ="Add to Cart" onClick={handleAddToCart} />
        </div>
        
        </>

    );
}