import "../App.css";
import QuantityCounter from './QuantityCounter.jsx'

function ProductCard({ product, modifyQuantityCounter, modifyCartCards }) {
    const addToCart = () => {
        modifyCartCards(product.id, true);
        // if quantityCounter still equals 0 after Add to Cart, quantityCounter will be added by 1
        if (product.quantityCounter === 0) modifyQuantityCounter(product.id, true);
    };

    return (
        <div className="ProductCard">
            <h4>{product.productName}</h4>
            <img src={product.image}></img>
            <h5>{product.brand}</h5>
            <QuantityCounter product={product} modifyQuantityCounter={modifyQuantityCounter} />
            <p>{product.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
      );
}

export default ProductCard