import products from "../data/products.js";
import "../App.css";
import NavBar from './NavBar.jsx'
import ProductsContainer from './ProductsContainer.jsx'

function GroceriesAppContainer() {
    return (
        <div>
            <NavBar />
            <div className="GroceriesApp-Container">
                <ProductsContainer products={products} />
                <div className="CartContainer"></div>
            </div>
        </div>
      );
}

export default GroceriesAppContainer