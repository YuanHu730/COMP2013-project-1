import "../App.css";
import ProductCard from './ProductCard.jsx'

function ProductsContainer({ products }) {
    return (
        <div className="ProductsContainer">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
      );
}

export default ProductsContainer