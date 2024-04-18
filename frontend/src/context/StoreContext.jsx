import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

  const [cartItems, SetCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      SetCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    }
    else {
      SetCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
  }
  const removeFromCart = (itemId) => {
    SetCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = food_list.find(product => product._id === itemId);
        totalAmount += itemInfo.price * cartItems[itemId];
      }
    }
    return totalAmount;
  };


  const contextValue = {
    food_list,
    cartItems,
    SetCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;