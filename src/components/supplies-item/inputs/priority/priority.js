import { useState } from 'react';
import styles from './priority-styles.module.scss';

export default function Priority({ title, number, field_name, handleFieldChange }) { 
  const [priority, setPriority] = useState(number);

  const handleChange = (event) => {
    setPriority(event.target.value);
    handleFieldChange(field_name, event.target.value);
  };

  return (
    <div>
      <span className={styles['priority-title']}>{title}</span>
      <input data-testid="priority-input" className={styles['priority-input']} value={priority} onChange={handleChange} />
    </div>
  );
}
