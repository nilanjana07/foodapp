import React from 'react';

const Menu = ({ items, addToCart }) => {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
