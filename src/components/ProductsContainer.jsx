import "../App.css";
import ProductCard from './ProductCard.jsx'

function ProductsContainer({ products, modifyQuantityCounter, modifyCartCards }) {
    return (
        <div className="ProductsContainer">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} modifyQuantityCounter={modifyQuantityCounter} 
                    modifyCartCards={modifyCartCards} />
            ))}
        </div>
      );
}

export default ProductsContainer