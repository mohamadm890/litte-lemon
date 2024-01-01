import React from "react";
import "./Card.css";

function Card({ name, price, description, imageSrc }) {
  return (
    <div className="card">
      <img class="card-image" src={imageSrc} alt={name} />
      <div class="category"> {name}</div>
      <div class="heading">
        {description}
        <div class="author">
          <span class="name">{price}$</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
