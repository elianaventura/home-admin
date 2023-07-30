import { useState } from 'react';
import styles from './priority-styles.module.scss';

export default function Priority({ title, number, field_name, handleFieldChange }) { 
  const [priority, setPriority] = useState(number);

  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  return (
    <div>
      <span className={styles['priority-title']}>{title}</span>
      <input className={styles['priority-input']} value={priority} onChange={handleChange} />
    </div>
  );
}
