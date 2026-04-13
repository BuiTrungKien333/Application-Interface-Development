import React from "react";

const Card = React.memo(function Card({ productName, price, onBuy }) {
  console.log(`Card [${productName}] vừa render`);

  return (
    <div>
      <p>Name: {productName}</p>
      <p>Price: {price}</p>
      <button onClick={() => onBuy(productName)}>Mua</button>
    </div>
  );
});

export default Card;
