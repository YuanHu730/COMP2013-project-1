import products from "../data/products.js";
import "../App.css";
import NavBar from './NavBar.jsx'
import ProductsContainer from './ProductsContainer.jsx'
import CartContainer from './CartContainer.jsx'
import { useState } from "react";

function GroceriesAppContainer() {
    const [productList, setProductList] = useState(
        products.map(product => ({
          ...product,
          quantityCounter: 0,  // the quantity of the product that is able to be modified by users on pages
          inCart: false  // equals true after the product is added to cartCards; equals false after the product is removed from cartCards; 
        }))
    );
    const [cartCards, setCartCards] = useState([]);
    const [imageNavCart, setImageNavCart] = useState("src/assets/cart-empty.png");

    // modify imageNavCart
    // newCartCards: new cartCards after the cartCards was changed
    const modifyImageNavCart = (newCartCards) => {
        let imgPath = "src/assets/cart-full.png";
        if (newCartCards.length === 0) imgPath = "src/assets/cart-empty.png";
        setImageNavCart(imgPath);
    };

    // modify quantityCounter
    // id: the id of the product
    // isAdd: if true, the quantity is added by 1; if false, the quantity is minused by 1;
    const modifyQuantityCounter = (id, isAdd) => {
        setProductList(prevProductList => {
            const index = prevProductList.findIndex(p => p.id === id);
            const newProductList = [...prevProductList];
            let minQuantityCounter = 0;
            if (newProductList[index].inCart) {
                minQuantityCounter = 1;
            }
            const newQuantityCounter = isAdd ? newProductList[index].quantityCounter + 1 : 
                                               Math.max(newProductList[index].quantityCounter - 1, minQuantityCounter);
            newProductList[index] = { ...newProductList[index], quantityCounter: newQuantityCounter };
            return newProductList;
        });
    };

    // empty quantityCounter
    // id: the id of the product
    const emptyQuantityCounter = (id) => {
        setProductList(prevProductList => {
            const index = prevProductList.findIndex(p => p.id === id);
            const newProductList = [...prevProductList];
            newProductList[index] = { ...newProductList[index], quantityCounter: 0 };
            return newProductList;
        });
    };

    // modify inCart
    // id: the id of the product
    // inCart: true when the id is in cartCards; false when the id is not in cartCards; 
    const modifyInCart = (id, inCart) => {
        setProductList(prevProductList => {
            const index = prevProductList.findIndex(p => p.id === id);
            const newProductList = [...prevProductList];
            newProductList[index] = { ...newProductList[index], inCart: inCart };
            return newProductList;
        });
    };


    // modify cartCards
    // id: the id of the product
    // isAdd: if true, the id is added to cartCards; if false, the id is removed from cartCards;
    const modifyCartCards = (id, isAdd) => {
        setCartCards(prevCartCards => {
            if (isAdd) {
                // add to cart
                if (prevCartCards.includes(id)) return prevCartCards;
                modifyInCart(id, true);
                setImageNavCart("src/assets/cart-full.png");
                const newCartCards = [...prevCartCards, id];
                modifyImageNavCart(newCartCards);
                return newCartCards;
            } else {
                // remove from cart
                modifyInCart(id, false);
                emptyQuantityCounter(id);
                const newCartCards = prevCartCards.filter(cartId => cartId !== id);
                modifyImageNavCart(newCartCards);
                return newCartCards;
            }
        });
    };

    // empty cartCards
    const emptyCartCards = () => {
        setCartCards(prevCartCards => {
            prevCartCards.forEach(cartCardID => {
                // remove from cart
                modifyInCart(cartCardID, false);
                emptyQuantityCounter(cartCardID);
            });
            modifyImageNavCart([]);
            return [];
        });
    };

    return (
        <div>
            <NavBar imageNavCart={imageNavCart} />
            <div className="GroceriesApp-Container">
                <ProductsContainer products={productList} modifyQuantityCounter={modifyQuantityCounter} 
                    modifyCartCards={modifyCartCards} />
                <CartContainer products={productList} cartCards={cartCards} 
                    modifyCartCards={modifyCartCards} emptyCartCards={emptyCartCards} 
                    modifyQuantityCounter={modifyQuantityCounter}  />
            </div>
        </div>
    );
}

export default GroceriesAppContainer