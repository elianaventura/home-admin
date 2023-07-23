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

export default function PriceByUnit({ title, amount, currency, unit, text_by }) {
  const [price, setPrice] = useState(amount);
  const [selectedCurrency, setSelectedCurrency] = useState(currency.options.find(curr => curr.selected))
  const [selectedUnit, setSelectedUnit] = useState(unit.options.find(un => un.selected));

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    if (event && event.target && event.target.value) {
      const newSelectedCurrency = currency.options.find(curr => event.target.value === curr.id);
      setSelectedCurrency(newSelectedCurrency);
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
        value={selectedCurrency.id}
        label={selectedCurrency.currency_selected_label}
        onChange={handleCurrencyChange}
      >
        {currency.options.map((curr, index) => renderCurrency(curr, index))}
      </Select>
      <input className={styles['amount-input']} value={price} onChange={handlePriceChange} />
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
