import "../App.css";
import ProductCard from './ProductCard.jsx'

function ProductsContainer({ products, modifyNewQuantityCounter, modifyCartCards }) {
    return (
        <div className="ProductsContainer">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} modifyNewQuantityCounter={modifyNewQuantityCounter} 
                    modifyCartCards={modifyCartCards} />
            ))}
        </div>
      );
}

export default ProductsContainer