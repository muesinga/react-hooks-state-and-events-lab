import React, { useState } from "react";

function Item({ name, category }) {
const [inCart, setInCart] = useState(true)


function handleClick() {
  setInCart((inCart) => !inCart);

}

{
  return (
    <li className={(inCart ? "" : "in-cart")}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{(inCart ? "Add to Cart" : "Remove from Cart")}</button>
    </li>
  );
}
}
export default Item;
