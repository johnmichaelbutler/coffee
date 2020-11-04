import React from 'react';
import { useParams } from 'react-router-dom';

function Item({ category }) {
  const { itemId } = useParams();

  const addToCart = () => {
    // Eventually add to cart
    console.log('Added to Cart');
  };

  const item = category[0].items
    .filter((item) => item.id === itemId)
    .map(({ name, picture, price, description }) => {
      return (
        <div key={name}>
          <h3>{name}</h3>
          <img
            src={picture}
            alt={name}
            // className="w-1/2 rounded justify-center mx-auto row-span-1 my-auto"
          />
          <p>${price}</p>
          <p>{description}</p>
          <button className="w-1/4 bg-blue-400 rounded" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      );
    });
  return <div>{item}</div>;
}

export default Item;
