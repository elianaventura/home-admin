"use client"

import factoryFrom from '../factory/factory-from';
const IconComponent = factoryFrom(verticalIconComponents);
import verticalIconComponents from '../factory/vertical-icons/components';
import styles from './verticals.module.scss';

const renderOption = function(IconComponent, { id, type, title, icon }, onSelectVertical, index) {
  return (
    <li className={styles.vertical} key={index} onClick={onSelectVertical(id)} aria-label={title}>
      <IconComponent className={styles.icon} type={type} {...icon} />
    </li>
  ); 
};

export default function Verticals({ options }) {
  return (
    <div>
      <ul className={styles['verticals-list']}>
        {options.map((option, index) => renderOption(IconComponent, option, () => {}, index))}
      </ul>
    </div>
  );
};
