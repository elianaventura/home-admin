import { useState, createContext } from "react";

const SuppliesItemContext = createContext({});

export function SuppliesItemProvider({ children, value }) {
  const [unit, setUnit] = useState(value);

  return (
    <SuppliesItemContext.Provider value={{ unit, setUnit }}>
      {children}    
    </SuppliesItemContext.Provider>
  )
};

export default SuppliesItemContext;
