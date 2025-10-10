import "../App.css";
import CartCard from './CartCard.jsx'

function CartContainer({ cartCards }) {
    let content;
    console.log(cartCards.length);
    if (!cartCards || cartCards.length === 0) {
        content = <p>No items in cart</p>;
    } else {
        content = cartCards.map((cartCard) => (
            <CartCard key={cartCard.id} cartCard={cartCard} />
        ));
    }
    return (
        <div className="CartContainer">
            <p>Card items: {cartCards.length}</p>
            <div>{content}</div>
            <div className="CartListBtns">
                <button className="RemoveButton">Empty Cart</button>
                <button className="BuyButton">Checkout: $</button>
            </div>
        </div>
      );
}

export default CartContainer