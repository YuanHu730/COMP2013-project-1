import products from "../data/products.js";
import "../App.css";
import ProductsContainer from './ProductsContainer.jsx'

function GroceriesAppContainer() {
    return (
        <div>
            <div className="NavBar"></div>
            <div className="GroceriesApp-Container">
                <ProductsContainer products={products} />
                <div className="CartContainer"></div>
            </div>
        </div>
      );
}

export default GroceriesAppContainer