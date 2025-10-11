import "../App.css";

function NavBar({ imageNavCart }) {
    return (
        <div className="NavBar">
            <span className="NavUser">Hello, Yuan Hu!</span>
            <span className="NavTitle">Groceries App</span>
            <img className="NavCart" src={imageNavCart}></img>
        </div>
      );
}

export default NavBar