// TODO: create a component that displays a single bakery item
import "./BakeryItem.css";

export default function BakeryItem(props) {
    return (
        <div id='bakery' class="bakery-item">
            <img class='item-img' src={props.itemImg} ></img>
            <div class='item-desc'>
                <h3>{props.bakeryItem}</h3>
                <p>{props.itemDesc}</p>
                <div class="price-cart">
                    <p>${props.price}</p>
                    <button onClick={() => props.setCartItems(props.BakeryItem)}>Click to Add</button>
                </div>

            </div>
        </div>
      );
}