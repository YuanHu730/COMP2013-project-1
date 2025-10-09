import "../App.css";

function NavBar() {
    return (
        <div className="NavBar">
            <span className="NavUser">Hello, Yuan Hu!</span>
            <span className="NavTitle">Groceries App</span>
            <img className="NavCart" src="src/assets/cart-empty.png"></img>
        </div>
      );
}

export default NavBar