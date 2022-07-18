import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);


function handleAddCartClick(){
  setIsInCart((isInCart) => !isInCart);
  console.log(isInCart)
}

  return (
    
      <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      className = {isInCart ? "in-cart": ""} 
      onClick={handleAddCartClick}>{isInCart ? "Remove From" : "Add to"}
         Cart
        </button>
    </li>
  
  );
}

export default Item;
