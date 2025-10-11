import "../App.css";
import QuantityCounter from './QuantityCounter.jsx'

function CartCard({ product, modifyQuantityCounter, modifyCartCards }) {
    const removeCartCard = () => {
        modifyCartCards(product.id, false);
    };

    return (
        <div className="CartCard">
            <div className="CartCardInfo">
                <img src={product.image}></img>
                <h4>{product.productName}</h4>
                <p>{product.price}</p>
                <QuantityCounter product={product} modifyQuantityCounter={modifyQuantityCounter} />
            </div>
            <div>
                <p>Total: ${product.totalPrice}</p>
                <button onClick={removeCartCard} className="RemoveButton">Remove</button>
            </div>
        </div>
      );
}

export default CartCard