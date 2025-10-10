import "../App.css";
import QuantityCounter from './QuantityCounter.jsx'

function CartCard({ cartCard }) {
    return (
        <div className="CartCard">
            <div className="CartCardInfo">
                <img src={cartCard.image}></img>
                <h4>{cartCard.productName}</h4>
                <p>{cartCard.price}</p>
                <QuantityCounter />
            </div>
            <div>
                <p>Total: </p>
                <button className="RemoveButton">Remove</button>
            </div>
        </div>
      );
}

export default CartCard