import "../App.css";
import QuantityCounter from './QuantityCounter.jsx'

function ProductCard({ product, modifyNewQuantityCounter, modifyCartCards }) {
    const addToCart = () => {
        if (product.newQuantityCounter <= 0) {
            alert("Please enter a quantity before adding to the cart!");
        } else {
            modifyCartCards(product.id, true);
        }
    };

    return (
        <div className="ProductCard">
            <h4>{product.productName}</h4>
            <img src={product.image}></img>
            <h5>{product.brand}</h5>
            <QuantityCounter product={product} modifyQuantityCounter={modifyNewQuantityCounter} />
            <p>{product.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
      );
}

export default ProductCard