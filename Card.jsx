
import React from 'react';
import './App.css';

const Card = ({ image, title, price }) => {
  return (
    <div className="product-info">
<div className="product-left">
    <img src={image} alt="product" width="100" height="150" />
  <p>{title}</p>
  <p className="price">{price}</p>
</div>
<button className="shop-button">SHOP</button>
</div> 
  );
};

export default Card;
{/* <>
<img src={image} alt="product" />
<p>{title}</p>
<p className="price">{price}</p>
<button className="shop-button">SHOP</button>
</> */}