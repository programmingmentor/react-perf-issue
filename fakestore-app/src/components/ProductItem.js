// components/ProductItem.js
import React from 'react';

function ProductItem({ product }) {
  return (
    <li>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </li>
  );
}

export default ProductItem;
