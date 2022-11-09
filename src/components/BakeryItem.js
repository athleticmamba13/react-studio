// TODO: create a component that displays a single bakery item
import "./BakeryItem.css";

export default function BakeryItem(props) {

    function addToCart() {
        props.setCartItems([...props.cartItems, props.bakeryItem])
        props.setCartTotal(props.cartTotal + props.price)
    }

    return (
        <div id='bakery' class="bakery-item">
            <img class='item-img' src={props.itemImg} ></img>
            <div class='item-desc'>
                <h3>{props.bakeryItem}</h3>
                <p>{props.itemDesc}</p>
                <div class="price-cart">
                    <p>${props.price}</p>
                    <button onClick={addToCart}>Click to Add</button>
                </div>

            </div>
        </div>
      );
}