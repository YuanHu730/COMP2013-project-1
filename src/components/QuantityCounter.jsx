import "../App.css";

function QuantityCounter({product, modifyQuantityCounter}) {
    const addQuantityCounter = () => {
        modifyQuantityCounter(product.id, true);
    };
    const minusQuantityCounter = () => {
        modifyQuantityCounter(product.id, false);
    };

    return (
        <div className="counter-container">
            <button onClick={minusQuantityCounter} className="QuantityBtn">-</button>
            <span>{product.quantityCounter}</span>
            <button onClick={addQuantityCounter} className="QuantityBtn">+</button>
        </div>
      );
}

export default QuantityCounter