import products from "../data/products.js";
import "../App.css";
import NavBar from './NavBar.jsx'
import ProductsContainer from './ProductsContainer.jsx'
import CartContainer from './CartContainer.jsx'

function GroceriesAppContainer() {
    return (
        <div>
            <NavBar />
            <div className="GroceriesApp-Container">
                <ProductsContainer products={products} />
                <CartContainer cartCards={products.slice(0, 3)} />
            </div>
        </div>
      );
}

export default GroceriesAppContainer