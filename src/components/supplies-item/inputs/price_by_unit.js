import { useState } from "react";

export default function PriceByUnit({ title, price, text_by }) {
  const [selectedPrice, setSelectedPrice] = useState(price);

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  return (
    <div>
      <span>{title}</span>
      <input value={selectedPrice.amount} onChange={handlePriceChange} />
      <span>{text_by}</span>
      unidad
    </div>);
}
