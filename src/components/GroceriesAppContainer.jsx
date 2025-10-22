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
          priceFloat: parseFloat(product.price.replace('$', '')),
          totalPrice: 0,  // totalPrice = quantityCounter * priceFloat
          quantityCounter: 0,  // the quantity of the product that that has already been add to cart
          newQuantityCounter: 0,  // the quantity of the product that has not been added to cart
          inCart: false  // equals true after the product is added to cartCards; equals false after the product is removed from cartCards; 
        }))
    );
    const [cartCards, setCartCards] = useState([]);
    const [totalPriceForCartCards, setTotalPriceForCartCards] = useState(0);
    const [imageNavCart, setImageNavCart] = useState("src/assets/cart-empty.png");

    // modify totalPriceForCartCards
    // newCartCards: new cartCards after the cartCards was changed
    // newProductList: new new productList after the productList was changed
    const modifyTotalPriceForCartCards = (newCartCards, newProductList=productList) => {
        let totalPrice = 0;
        newCartCards.forEach(cartCardID => {
            const index = newProductList.findIndex(p => p.id === cartCardID);
            totalPrice += newProductList[index].totalPrice;
        });
        setTotalPriceForCartCards(totalPrice);
    };

    // modify imageNavCart
    // newCartCards: new cartCards after the cartCards was changed
    const modifyImageNavCart = (newCartCards) => {
        let imgPath = "src/assets/cart-full.png";
        if (newCartCards.length === 0) imgPath = "src/assets/cart-empty.png";
        setImageNavCart(imgPath);
    };

    // add quantityCounter
    // id: the id of the product
    const addQuantityCounter = (id) => {
        setProductList(prevProductList => {
            const index = prevProductList.findIndex(p => p.id === id);
            const newProductList = [...prevProductList];
            const modifiedQuantityCounter = newProductList[index].quantityCounter + newProductList[index].newQuantityCounter;
            const totalPrice = modifiedQuantityCounter * newProductList[index].priceFloat;
            newProductList[index] = { 
                ...newProductList[index], 
                quantityCounter: modifiedQuantityCounter, 
                newQuantityCounter: 0,
                totalPrice: totalPrice 
            };
            let newCartCards;
            if (cartCards.includes(id)) newCartCards = cartCards;
            else newCartCards = [...cartCards, id];
            modifyTotalPriceForCartCards(newCartCards, newProductList);
            return newProductList;
        });
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
            const totalPrice = newQuantityCounter * newProductList[index].priceFloat;
            newProductList[index] = { ...newProductList[index], quantityCounter: newQuantityCounter, totalPrice: totalPrice };
            modifyTotalPriceForCartCards(cartCards, newProductList);
            return newProductList;
        });
    };

    // empty quantityCounter
    // id: the id of the product
    const emptyQuantityCounter = (id) => {
        setProductList(prevProductList => {
            const index = prevProductList.findIndex(p => p.id === id);
            const newProductList = [...prevProductList];
            newProductList[index] = { ...newProductList[index], quantityCounter: 0, totalPrice: 0 };
            return newProductList;
        });
    };

    // modify newQuantityCounter
    // id: the id of the product
    // isAdd: if true, the quantity is added by 1; if false, the quantity is minused by 1;
    const modifyNewQuantityCounter = (id, isAdd) => {
        setProductList(prevProductList => {
            const index = prevProductList.findIndex(p => p.id === id);
            const newProductList = [...prevProductList];
            const newQuantityCounter = isAdd ? newProductList[index].newQuantityCounter + 1 : 
                                               Math.max(newProductList[index].newQuantityCounter - 1, 0);
            newProductList[index] = { ...newProductList[index], newQuantityCounter: newQuantityCounter };
            modifyTotalPriceForCartCards(cartCards, newProductList);
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
                if (productList[productList.findIndex(p => p.id === id)].newQuantityCounter === 0) 
                    // if the newQuantityCounter of the product equals 0, the product can not be added to cartCards
                    return prevCartCards;
                modifyInCart(id, true);
                addQuantityCounter(id);
                setImageNavCart("src/assets/cart-full.png");
                let newCartCards;
                if (prevCartCards.includes(id)) newCartCards = prevCartCards;
                else newCartCards = [...prevCartCards, id];
                modifyImageNavCart(newCartCards);
                return newCartCards;
            } else {
                // remove from cart
                modifyInCart(id, false);
                emptyQuantityCounter(id);
                const newCartCards = prevCartCards.filter(cartId => cartId !== id);
                modifyImageNavCart(newCartCards);
                modifyTotalPriceForCartCards(newCartCards);
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
            modifyTotalPriceForCartCards([]);
            return [];
        });
    };

    return (
        <div>
            <NavBar imageNavCart={imageNavCart} />
            <div className="GroceriesApp-Container">
                <ProductsContainer products={productList} 
                    modifyNewQuantityCounter={modifyNewQuantityCounter} 
                    modifyCartCards={modifyCartCards} />
                <CartContainer products={productList} cartCards={cartCards} 
                    modifyCartCards={modifyCartCards} emptyCartCards={emptyCartCards} 
                    modifyQuantityCounter={modifyQuantityCounter} 
                    totalPriceForCartCards={totalPriceForCartCards} />
            </div>
        </div>
    );
}

export default GroceriesAppContainer