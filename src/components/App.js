import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isOn, setIsOn] = useState(false);

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  return (
    <div className={"App " + (isOn ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isOn ? "Light" : "Dark"} Mode </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
