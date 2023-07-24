import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import styles from './price_by_unit.module.scss';

const renderCurrency = (currency, index) => (
  <MenuItem className={styles['currency-option']} key={index} value={currency.id}>{currency.display}</MenuItem>
);

export default function PriceByUnit({ title, amount, currency, text_by }) {
  const [price, setPrice] = useState(amount);
  const [selectedCurrency, setSelectedCurrency] = useState(currency.options.find(curr => curr.selected))

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    if (event && event.target && event.target.value) {
      const newSelectedCurrency = currency.options.find(curr => event.target.value === curr.id);
      setSelectedCurrency(newSelectedCurrency);
    }
  };

  return (
    <div>
      <span>{title}</span>
      <Select
        className={styles['currency-select']}
        labelId="currency-select-label"
        id="currency-select"
        value={selectedCurrency.id}
        label={selectedCurrency.currency_selected_label}
        onChange={handleCurrencyChange}
      >
        {currency.options.map((curr, index) => renderCurrency(curr, index))}
      </Select>
      <input className={styles['amount-input']} value={price} onChange={handlePriceChange} />
    </div>);
}
