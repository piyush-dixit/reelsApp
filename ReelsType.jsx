import React from 'react';

const Reel = ({ item }) => {
  return (
    <div className="reel-item">
      {item.type === 'video' ? (
        <video src={item.src} autoPlay loop muted className="reel-media" />
      ) : (
        <img src={item.src} alt="Reel" className="reel-media" />
      )}
      <div className="product-info">
        <div className="product-left">
          <p>{item.title}</p>
          <p className="price">{item.price}</p>
        </div>
        <button className="shop-button">SHOP</button>
      </div>
    </div>
  );
};

export default Reel;
