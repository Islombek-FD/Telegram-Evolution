import React, { useState, useEffect } from "react";

import Cart from './components/Cart';
import Cards from './components/Cards';
const { getData } = require('./db');

const tg = window.Telegram.WebApp;

function App() {
  const foods = getData();
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (food) => {
    const exist = cartItems.find(item => item.id === food.id);

    if (exist) {
      const updatedItems = cartItems.map(item => item.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : item);
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  }

  const removeFromCart = (food) => {
    const exist = cartItems.find(item => item.id === food.id);

    if (exist.quantity === 1) {
      const restItems = cartItems.filter(item => item.id !== food.id);
      setCartItems(restItems);
    } else {
      const updatedItems = cartItems.map(item => item.id === exist.id ? { ...exist, quantity: exist.quantity - 1 } : item);
      setCartItems(updatedItems);
    }
  }

  const clickCheckout = () => {
    tg.MainButton.text = 'Pay :)';
    tg.MainButton.show();
  }

  useEffect(() => {
    tg.ready();
  });

  return (
    <div className='container'>
      <div className='text-center pt-3'>
        <h1 className='mb-3'>Telegram evolution!</h1>

        <Cart
          cartItems={cartItems}
          clickCheckout={clickCheckout}
        />

        <Cards
          foods={foods}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
}

export default App;
