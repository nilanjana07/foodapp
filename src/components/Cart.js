import React from 'react';

const Cart = ({ cartItems, removeFromCart, changeQuantity }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => changeQuantity(item, item.quantity - 1)}>-</button>
              <button onClick={() => changeQuantity(item, item.quantity + 1)}>+</button>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
