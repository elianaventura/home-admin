import { useState, createContext } from "react";

const BrandsContext = createContext({});

export function BrandsProvider({ children, value }) {
  const [brands, setBrands] = useState(value || []);

  return (
    <BrandsContext.Provider value={{ brands, setBrands }}>
      {children}    
    </BrandsContext.Provider>
  )
};

export default BrandsContext;
