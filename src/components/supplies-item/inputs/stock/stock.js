import { useContext, useState } from "react";
import styles from "./stock.module.scss";
import SuppliesItemContext from "@/components/context/supplies-item";
import StockTable from "./table";

const renderUnitsText = (amount, display) => {
  const text = amount == 1 ? display.singular : display.plural;
  return <span>{text}</span>;
};

export default function Stock({ title, amount, stock_details, field_name, handleFieldChange }) { 
  const [stock, setStock] = useState(amount);
  const { unit } = useContext(SuppliesItemContext);

  const handleChange = (event) => {
    setStock(event.target.value);
    handleFieldChange(field_name, event.target.value);
  };

  return (
    <div>
      <span className={styles['stock-title']}>{title}</span>
      <input data-testid="stock-input" className={styles['stock-input']} value={stock} onChange={handleChange} />
      {renderUnitsText(stock, unit.display)}
      {stock_details && <StockTable {...stock_details} />}
    </div>
  );
}
