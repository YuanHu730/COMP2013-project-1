import "../App.css";
import QuantityCounter from './QuantityCounter.jsx'

function ProductCard({ product }) {
    return (
        <div className="ProductCard">
            <h4>{product.productName}</h4>
            <img src={product.image}></img>
            <h5>{product.brand}</h5>
            <QuantityCounter />
            <p>{product.price}</p>
            <button>Add to Cart</button>
        </div>
      );
}

export default ProductCard