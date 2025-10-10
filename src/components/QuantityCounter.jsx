import "../App.css";

function QuantityCounter() {
    return (
        <div className="counter-container">
            <button className="QuantityBtn">-</button>
            <span>0</span>
            <button className="QuantityBtn">+</button>
        </div>
      );
}

export default QuantityCounter