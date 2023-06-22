"use client"

import React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import factoryFrom from '../factory/factory-from';
import itemComponents from '../factory/items/components';

const renderTab = ({ id, title }, index) => {
  return (
    <Tab key={index} id={id} label={title} />
  );
};

const renderItem = (props, index) => {
  const ItemComponent = factoryFrom(itemComponents);
  return <ItemComponent key={index} {...props} />
};

const renderTabContent = ({ id, items }, selectedTab, index) => {
  if (index !== selectedTab) {
    return null;
  }
  return (
    items && (
      <Box key={id}>
        <div>
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </Box>)
  );
};

export default function Content({ tabs, vertical_id, selected_tab, title }) {
  const [selectedTab, setSelectedTab] = useState(selected_tab);
  const handleTabChange = (event, value) => {
    setSelectedTab(value);
  };

  return (
    <Box>
      <Tabs value={selectedTab} onChange={handleTabChange} aria-label={title}>
        {tabs.map((tab, index) => renderTab(tab, index))}
      </Tabs>
      <Box>
        {tabs.map((tab, index) => renderTabContent(tab, selectedTab, index))}
      </Box>
    </Box>
  );
};
