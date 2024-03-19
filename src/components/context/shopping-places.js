import { useState, createContext } from "react";

const ShoppingPlacesContext = createContext({});

export function ShoppingPlacesProvider({ children, value }) {
  const [places, setShoppingPlaces] = useState(value || []);

  return (
    <ShoppingPlacesContext.Provider value={{ places, setShoppingPlaces }}>
      {children}    
    </ShoppingPlacesContext.Provider>
  )
};

export default ShoppingPlacesContext;
