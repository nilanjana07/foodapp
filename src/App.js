import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [items] = useState([
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 5 },
    { id: 3, name: 'Pasta', price: 7 },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const exist = cartItems.find(x => x.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map(x => x.id === item.id ? { ...exist, quantity: exist.quantity + 1 } : x)
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter(x => x.id !== item.id));
  };

  const changeQuantity = (item, quantity) => {
    if (quantity <= 0) {
      removeFromCart(item);
    } else {
      setCartItems(
        cartItems.map(x => x.id === item.id ? { ...item, quantity } : x)
      );
    }
  };

  return (
    <div className="App">
      <Header />
      <Menu items={items} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} changeQuantity={changeQuantity} />
      <Footer />
    </div>
  );
};

export default App;
