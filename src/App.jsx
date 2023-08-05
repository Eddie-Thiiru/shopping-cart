import { useState, createContext } from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import { DataProvider } from "./components/DataProvider";
import "./styles/App.css";

export const CartContext = createContext();

const App = () => {
  const [cartItems, setCartItems] = useState({
    count: 0,
    items: [],
  });

  const isDuplicate = (id) => {
    const array = cartItems.items;

    for (let i = 0; i < array.length; i++) {
      const element = array[i];

      if (element.uniqueId === id) {
        return true;
      }
    }
    return false;
  };

  const addToCart = (data) => {
    const duplicate = isDuplicate(data.uniqueId);

    if (duplicate === false) {
      setCartItems({
        count: cartItems.count + 1,
        items: cartItems.items.concat(data),
      });
    } else {
      return;
    }
  };

  const removeFromCart = (id) => {
    setCartItems({
      count: cartItems.count - 1,
      items: cartItems.items.filter((item) => item.uniqueId !== id),
    });
  };

  const cartData = cartItems.items;

  return (
    <div id="App">
      <Header cartItemsCount={cartItems.count} />
      <DataProvider>
        <CartContext.Provider value={{ cartData, addToCart, removeFromCart }}>
          <MainSection />
        </CartContext.Provider>
      </DataProvider>
      <Footer />
    </div>
  );
};

export default App;
