import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0.0); 

  return (
    <div className="App">
      <h1>Chef Curry's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div class="flex-container">
        {bakeryData.map((item) => ( // TODO: map bakeryData to BakeryItem components
          // <p>Bakery Item {index}</p> // replace with BakeryItem component
          <BakeryItem setCartItems={setCartItems} bakeryItem={item.name} itemImg={item.image} itemDesc={item.description} price={item.price}/>
        ))}
      </div>

      <div>
        <h2>Cart</h2>
        {cartItems.map((item) => ( // TODO: map bakeryData to BakeryItem components
          <p>item</p> 
        ))}
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
