// components/ProductList.js
import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </ul>
  );
}

export default ProductList;
