import { useContext, useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import styles from './price_by_unit.module.scss';
import SuppliesItemContext from "@/components/context/supplies-item";

const renderCurrency = (currency, index) => (
  <MenuItem className={styles['currency-option']} key={index} value={currency.id}>{currency.display}</MenuItem>
);

export default function PriceByUnit({ title, amount, currency, text_by, field_name, handleFieldChange }) {
  const [price, setPrice] = useState(amount);
  const [selectedCurrency, setSelectedCurrency] = useState(currency.options.find(curr => curr.selected));
  const { unit } = useContext(SuppliesItemContext);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    handleFieldChange(field_name, {
      amount: event.target.value,
      currency: selectedCurrency.id,
      unit: unit.id,
    });
  };

  const handleCurrencyChange = (event) => {
    const newSelectedCurrency = currency.options.find(curr => event.target.value === curr.id);
    setSelectedCurrency(newSelectedCurrency);
    handleFieldChange(field_name, {
      amount: price,
      currency: newSelectedCurrency.id,
      unit: unit.id,
    });
  };

  return (
    <div>
      <span>{title}</span>
      <Select
        className={styles['currency-select']}
        labelId="currency-select-label"
        id="currency-select"
        value={selectedCurrency.id}
        label={selectedCurrency.currency_select_label}
        onChange={handleCurrencyChange}
      >
        {currency.options.map((curr, index) => renderCurrency(curr, index))}
      </Select>
      <input data-testid="price-amount-input" className={styles['amount-input']} value={price} onChange={handlePriceChange} />
    </div>);
}
