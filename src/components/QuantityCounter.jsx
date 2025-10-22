import "../App.css";

function QuantityCounter({product, modifyQuantityCounter, calledByCart=false}) {
    // the parameter calledByCart for identifying if this component is called by CartCard or ProductCard
    const addQuantityCounter = () => {
        modifyQuantityCounter(product.id, true);
    };
    const minusQuantityCounter = () => {
        modifyQuantityCounter(product.id, false);
    };

    return (
        <div className="counter-container">
            <button onClick={minusQuantityCounter} className="QuantityBtn">-</button>
            <span>{calledByCart ? product.quantityCounter : product.newQuantityCounter}</span>
            <button onClick={addQuantityCounter} className="QuantityBtn">+</button>
        </div>
      );
}

export default QuantityCounter