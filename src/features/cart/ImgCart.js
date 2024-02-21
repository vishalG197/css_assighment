// ImageCard.js
import React from 'react';
import './imgCart.css';

const ImgCart = ({ title, price, imageUrl }) => {
  return (
    <div className="image-card">
      <img src={imageUrl} alt={title} />
      <div className="card-details">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ImgCart;
