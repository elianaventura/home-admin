"use client"

import factoryFrom from '../factory/factory-from';
import verticalIconComponents from '../factory/vertical-icons/components';

const renderOption = function(IconComponent, { id, type, title, icon }, onSelectVertical, index) {
  return (
    <li className="vertical" key={index} onClick={onSelectVertical(id)} aria-label={title}>
      <IconComponent type={type} {...icon} />
    </li>
  ); 
};

export default function Verticals({ options }) {
  const IconComponent = factoryFrom(verticalIconComponents);
  return (
    <div className="verticals">
      <ul className="verticals-list">
        {options.map((option, index) => renderOption(IconComponent, option, () => {}, index))}
      </ul>
    </div>
  );
};
