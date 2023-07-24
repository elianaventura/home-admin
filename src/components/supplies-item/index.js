"use client"

import React from 'react';
import Accordion from '@mui/material/Accordion';

import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './supplies-item.module.scss';

import inputDataComponents from '../factory/supplies-inputs/components';
import componentFactoryFrom from '../factory/factory-from';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import { SuppliesItemProvider } from '../context/supplies-item';

const renderInputDataAttribute = (props, index) => {
  const InputDataComponent = componentFactoryFrom(inputDataComponents);
  return <InputDataComponent key={index} {...props} />;
};

export default function SuppliesItem({ id, title, expanded, input_data_attributes, itemsNameChangeText }) {
  const [isExpanded, setExpanded] = React.useState(expanded);
  const [titleEditOpen, setTitleEditOpen] = React.useState(false);
  const [itemTitle, setItemTitle] = React.useState(title);
  const handleTitleEditOpen = () => setTitleEditOpen(true);
  const handleTitleEditClose = () => setTitleEditOpen(false);

  const handleExpand = () => {
    setExpanded(!isExpanded);
  };

  const openTitleEdit = (e) => {
    e.stopPropagation();
    handleTitleEditOpen();
  };

  const onChangeTitle = (event) => {
    const newTitle = event.target.value;
    setItemTitle(newTitle);
  };

  const getSelectedUnit = () => {
    const unitAttribute = input_data_attributes.find(attr => attr.type === 'unit');
    if (!unitAttribute) return null;

    return unitAttribute.options.find(un => un.selected);
  };

  return (
    <div className={styles.container}>
      <Accordion expanded={isExpanded} onChange={handleExpand}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <span className={styles['item-title']}>{itemTitle}</span>
          <EditIcon onClick={openTitleEdit} className={styles['item-edit-icon']} />
        </AccordionSummary>
        <AccordionDetails>
          <SuppliesItemProvider value={getSelectedUnit()}>
            {input_data_attributes.map((inputData, index) => renderInputDataAttribute(inputData, index))}
          </SuppliesItemProvider>
        </AccordionDetails>
      </Accordion>
      <Modal
        open={titleEditOpen}
        onClose={handleTitleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles['item-edit-modal']}>
          <span className={styles['item-name-change-text']}>{itemsNameChangeText}</span>
          <input className={styles['item-name-change-input']} type="text" value={itemTitle} onChange={onChangeTitle} />
        </div>
      </Modal>
    </div>
  );
};
