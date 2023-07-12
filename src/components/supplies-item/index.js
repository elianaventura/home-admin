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
import Box from '@mui/material/Box';

const renderInputDataAttribute = (props, index) => {
  const InputDataComponent = componentFactoryFrom(inputDataComponents);
  return <InputDataComponent key={index} {...props} />;
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SuppliesItem({ id, title, expanded, input_data_attributes }) {
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
          {input_data_attributes.map((inputData, index) => renderInputDataAttribute(inputData, index))}
        </AccordionDetails>
      </Accordion>
      <Modal
        open={titleEditOpen}
        onClose={handleTitleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          Cambiar título: <input type="text" value={itemTitle} onChange={onChangeTitle} />
        </Box>
      </Modal>
    </div>
  );
};
