import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import styles from './price_by_unit.module.scss';

const renderCurrency = (currency, index) => (
  <MenuItem className={styles['currency-option']} key={index} value={currency.id}>{currency.display}</MenuItem>
);

export default function PriceByUnit({ title, price, text_by }) {
  const [selectedPrice, setSelectedPrice] = useState(price);
  const [currency, setCurrency] = useState(price.currencies.find(curr => curr.selected))

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    if (event && event.target && event.target.value) {
      const selectedCurrency = price.currencies.find(curr => event.target.value === curr.id);
      setCurrency(selectedCurrency);
    }
  };

  return (
    <div>
      <span>{title}</span>
      <Select
        className={styles['currency-select']}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currency.id}
        label={price.currency_selected_label}
        onChange={handleCurrencyChange}
      >
        {price.currencies.map((curr, index) => renderCurrency(curr, index))}
      </Select>
      <input className={styles['amount-input']} value={selectedPrice.amount} onChange={handlePriceChange} />
      <span>{text_by}</span>
      unidad
    </div>);
}
