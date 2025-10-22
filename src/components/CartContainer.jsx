import "../App.css";
import CartCard from './CartCard.jsx'

function CartContainer({ products, cartCards, modifyCartCards, emptyCartCards, 
    modifyQuantityCounter, totalPriceForCartCards }) {
    let content;
    if (!cartCards || cartCards.length === 0) {
        content = <p>No items in cart</p>;
    } else {
        content = cartCards.map(cartCardID => {
            const cartCard = products.find(product => product.id === cartCardID);
            return <CartCard key={cartCardID} product={cartCard} 
                             modifyQuantityCounter={modifyQuantityCounter} 
                             modifyCartCards={modifyCartCards} />;
        });
    }

    return (
        <div className="CartContainer">
            <p>Card items: {cartCards.length}</p>
            <div>{content}</div>
            <div className="CartListBtns">
                <button onClick={emptyCartCards} className="RemoveButton">Empty Cart</button>
                <button className="BuyButton">Checkout: ${totalPriceForCartCards}</button>
            </div>
        </div>
      );
}

export default CartContainer