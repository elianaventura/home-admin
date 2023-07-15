import Box from '@mui/material/Box';
import factoryFrom from '../../factory/factory-from';
import itemComponents from '../../factory/items/components';

const renderItem = (props, itemsNameChangeText, index) => {
  const ItemComponent = factoryFrom(itemComponents);
  return <ItemComponent key={index} {...props} itemsNameChangeText={itemsNameChangeText} />
};

export default function ItemsList({ id, items, items_name_change_text }) {
  return (
    items && (
      <Box key={id}>
        <div>
          {items.map((item, index) => renderItem(item, items_name_change_text, index))}
        </div>
      </Box>)
  );
};
