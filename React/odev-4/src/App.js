import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";

function App() {
  const [cart, setCart] = useState([
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
  ]);
  const [itemCount, setItemCount] = useState(0);

  const handleIncrement = (product) => {
    const newCart = [...cart];
    const index = newCart.indexOf(product);
    newCart[index] = { ...newCart[index] };
    newCart[index].value++;
    const itemCount = getItemCount(newCart);
    setCart(newCart);
    setItemCount(itemCount);
  };

  const handleDecrement = (product) => {
    const newCart = [...cart];
    const index = newCart.indexOf(product);
    newCart[index] = { ...newCart[index] };
    newCart[index].value--;
    const itemCount = getItemCount(newCart);
    setCart(newCart);
    setItemCount(itemCount);
  };

  const getItemCount = (cart) => {
    let itemCount = cart.reduce((total, product) => total + product.value, 0);
    return itemCount;
  };

  return (
    <div className="App">
      <Navbar totalItems={itemCount} />
      <ProductsGrid
        products={products}
        cart={cart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

export default App;
