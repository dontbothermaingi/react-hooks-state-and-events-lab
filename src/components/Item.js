import React ,{useState} from "react";

function Item({ name, category }) {

  const [inCart, outCart] = useState(false)

  function handleCart(){
    outCart(prevCart => !prevCart)
  }

  const buttonText = inCart? "Remove From Cart":"Add to Cart";
  const classLabel = inCart? "in-cart": "";
  return (
    <li className={classLabel}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
