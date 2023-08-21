import { useState, useContext, useEffect } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SuppliesItemContext from "@/components/context/supplies-item";

import unitStyles from './unit.module.scss';
import consumptionStyles from './consumption.module.scss';

const renderTimeUnit = (unit, index) => (
  <MenuItem className={unitStyles['unit-option']} key={index} value={unit.id}>{unit.display}</MenuItem>
);

const renderUnitsText = (amount, display) => {
  const text = amount == 1 ? display.singular : display.plural;
  return <span>{text}</span>;
};

export default function Consuption({ title, amount, time_units, field_name, handleFieldChange }) {
  const [selectedTimeUnit, setSelectedTimeUnit] = useState(time_units.find(un => un.selected));
  const { unit } = useContext(SuppliesItemContext);
  const [amountConsumption, setAmountConsumption] = useState(amount);

  useEffect(() => {
    handleFieldChange(field_name, {
      amount: amountConsumption,
      unit: unit.id,
      time_unit: selectedTimeUnit.id,
    });
  }, [unit]);

  const handleTimeUnitChange = (event) => {
    const newSelectedTimeUnit = time_units.find(un => event.target.value === un.id);
    setSelectedTimeUnit(newSelectedTimeUnit);
    handleFieldChange(field_name, {
      amount: amountConsumption,
      unit: unit.id,
      time_unit: newSelectedTimeUnit.id,
    });
  };

  const handleAmountChange = (event) => {
    setAmountConsumption(event.target.value);
    handleFieldChange(field_name, {
      amount: event.target.value,
      unit: unit.id,
      time_unit: selectedTimeUnit.id,
    });
  };

  return (
    <>
      <span className={unitStyles['unit-select-title']}>{title}</span>
      <Select
        className={unitStyles['unit-select']}
        labelId="unit-select-label"
        id="unit-select"
        value={selectedTimeUnit.id}
        onChange={handleTimeUnitChange}
      >
        {time_units.map((un, index) => renderTimeUnit(un, index))}
      </Select>
      <input data-testid="amount-input" className={consumptionStyles['amount-input']} value={amountConsumption} onChange={handleAmountChange} />
      {renderUnitsText(amountConsumption, unit.display)}
    </>
  );
};
