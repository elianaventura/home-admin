import { useContext, useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import styles from './unit.module.scss';
import SuppliesItemContext from "@/components/context/supplies-item";

const renderUnit = (unit, index) => (
  <MenuItem className={styles['unit-option']} key={index} value={unit.id}>{unit.display.singular}</MenuItem>
);

export default function Unit({ title, options, field_name, handleFieldChange }) {
  const [selectedUnit, setSelectedUnit] = useState(options.find(un => un.selected));
  const { setUnit } = useContext(SuppliesItemContext);

  const handleUnitChange = (event) => {
    const newSelectedUnit = options.find(un => event.target.value === un.id);
    setSelectedUnit(newSelectedUnit);
    setUnit(newSelectedUnit);
    handleFieldChange(field_name, newSelectedUnit.id);
  };

  return (
    <>
      <span className={styles['unit-select-title']}>{title}</span>
      <Select
        className={styles['unit-select']}
        labelId="unit-select-label"
        id="currency-select"
        value={selectedUnit.id}
        onChange={handleUnitChange}
      >
        {options.map((un, index) => renderUnit(un, index))}
      </Select>
    </>
  );
}
