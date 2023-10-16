import { useContext, useEffect, useState } from "react";
import styles from "./stock.module.scss";
import SuppliesItemContext from "@/components/context/supplies-item";
import StockTable from "./table";

const renderUnitsText = (amount, display) => {
  const text = amount == 1 ? display.singular : display.plural;
  return <span>{text}</span>;
};

const buildStockState = (amount, items) => {
  return ({
    amount,
    details: items.map(({ id, expiration_date, brand }) => ({
      id,
      expiration_date,
      brand,
    })),
  });
};

export default function Stock({ title, amount, stock_details, field_name, handleFieldChange }) {
  const [stockAmount, setStockAmount] = useState(amount);
  const [details, setDetails] = useState((stock_details && stock_details.items) || []);
  const { unit } = useContext(SuppliesItemContext);

  useEffect(() => {
    handleFieldChange(field_name, buildStockState(stockAmount, details));
  }, [stockAmount, details]);

  const handleChange = (event) => {
    setStockAmount(event.target.value);
  };

  return (
    <div>
      <span className={styles['stock-title']}>{title}</span>
      <input data-testid="stock-input" className={styles['stock-input']} value={stockAmount} onChange={handleChange} />
      {renderUnitsText(stockAmount, unit.display)}
      {stock_details && <StockTable {...stock_details} onChangeDetails={setDetails} />}
    </div>
  );
}
