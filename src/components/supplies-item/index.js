"use client"

import React from 'react';
import Accordion from '@mui/material/Accordion';

import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './supplies-item.module.scss';

import inputDataComponents from '../factory/supplies-inputs/components';
import componentFactoryFrom from '../factory/factory-from';
const InputDataComponent = componentFactoryFrom(inputDataComponents);
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { SuppliesItemProvider } from '../context/supplies-item';

const renderInputDataAttribute = (props, index) => {
  return <InputDataComponent key={index} {...props} />;
};

export default function SuppliesItem({ id, title, expanded, input_data_attributes, actions, itemsNameChangeText }) {
  const [isExpanded, setExpanded] = React.useState(expanded);
  const [titleEditOpen, setTitleEditOpen] = React.useState(false);
  const [itemTitle, setItemTitle] = React.useState(title);
  const [formChanged, setFormChanged] = React.useState(false);
  const handleTitleEditOpen = () => setTitleEditOpen(true);
  const handleTitleEditClose = () => setTitleEditOpen(false);
  const [formData, setFormData] = React.useState({});

  const onFirstSave = () => {
    console.log(formData);
  };

  const onEdit = () => {
    console.log(formData);
  };

  const renderAction = ({ type, text }, index) => {
    switch (type) {
      case ('SUBMIT_EDITION'):
        return (
          formChanged && <Button key={index} onClick={onEdit} variant="contained">{text}</Button>
        );
      case ('SUBMIT'):
        return (
          formChanged && <Button key={index} onClick={onFirstSave} variant="contained">{text}</Button>
        );
    }
  };

  const handleFieldChange = (fieldName, value) => {
    if (!formChanged) {
      setFormChanged(true);
    }
    const newFormData = { ...formData };
    newFormData[`${fieldName}`] = value;
    setFormData(newFormData);
  };

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
            {input_data_attributes.map((inputData, index) => renderInputDataAttribute({ ...inputData, handleFieldChange }, index))}
            {actions.map((action, index) => renderAction(action, index))}
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
