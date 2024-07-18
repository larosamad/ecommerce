import mockProducts from "../interface/productInterface";
import ProductCard from "./ProductCard";
import "../css/GridCard.css"

export default function GridCard() {
    return(
        <div className="center-grid bg-0">
            <div className="products-grid">
                {mockProducts.map((product)=>(
                <ProductCard key={product.id} product={product} />
                )
                )}
            </div>
        </div>

    );
}