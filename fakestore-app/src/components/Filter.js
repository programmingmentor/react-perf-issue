// components/Filter.js
import React, { useState, useEffect } from 'react';

function Filter({ setCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <select onChange={(e) => setCategory(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </select>
  );
}

export default Filter;
