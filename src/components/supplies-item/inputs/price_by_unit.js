import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import styles from './price_by_unit.module.scss';

const renderCurrency = (currency, index) => (
  <MenuItem className={styles['currency-option']} key={index} value={currency.id}>{currency.display}</MenuItem>
);

const renderUnit = (unit, index) => (
  <MenuItem className={styles['unit-option']} key={index} value={unit.id}>{unit.display}</MenuItem>
);

export default function PriceByUnit({ title, price, unit, text_by }) {
  const [selectedPrice, setSelectedPrice] = useState(price);
  const [currency, setCurrency] = useState(price.currencies.find(curr => curr.selected))
  const [selectedUnit, setSelectedUnit] = useState(unit.options.find(un => un.selected));

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    if (event && event.target && event.target.value) {
      const selectedCurrency = price.currencies.find(curr => event.target.value === curr.id);
      setCurrency(selectedCurrency);
    }
  };

  const handleUnitChange = (event) => {
    if (event && event.target && event.target.value) {
      const newSelectedUnit = unit.options.find(un => event.target.value === un.id);
      setSelectedUnit(newSelectedUnit);
    }
  };

  return (
    <div>
      <span>{title}</span>
      <Select
        className={styles['currency-select']}
        labelId="currency-select-label"
        id="currency-select"
        value={currency.id}
        label={price.currency_selected_label}
        onChange={handleCurrencyChange}
      >
        {price.currencies.map((curr, index) => renderCurrency(curr, index))}
      </Select>
      <input className={styles['amount-input']} value={selectedPrice.amount} onChange={handlePriceChange} />
      <span>{text_by}</span>
      <Select
        className={styles['unit-select']}
        labelId="unit-select-label"
        id="currency-select"
        value={selectedUnit.id}
        label={selectedUnit.unit_select_label}
        onChange={handleUnitChange}
      >
        {unit.options.map((un, index) => renderUnit(un, index))}
      </Select>
    </div>);
}
