"use client"

import React from 'react';
import Accordion from '@mui/material/Accordion';

import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './supplies-item.module.scss';

const renderInputDataAttribute = ({ title }, index) => (
  <div key={index}>
    {title}
  </div>
);

export default function SuppliesItem({ id, title, expanded, input_data_attributes }) {
  const [isExpanded, setExpanded] = React.useState(expanded);

  const handleChange = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={styles.container}>
      <Accordion expanded={isExpanded} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>
          {input_data_attributes.map((inputData, index) => renderInputDataAttribute(inputData, index))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
