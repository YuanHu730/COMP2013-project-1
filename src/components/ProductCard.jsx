import "../App.css";

function ProductCard({ product }) {
    return (
        <div className="ProductCard">
            <h4>{product.productName}</h4>
            <img src={product.image}></img>
            <h5>{product.brand}</h5>
            <div className="ProductQuantityDiv">
                <button className="QuantityBtn">-</button>
                <span>0</span>
                <button className="QuantityBtn">+</button>
            </div>
            <p>{product.price}</p>
            <button>Add to Cart</button>
        </div>
      );
}

export default ProductCard