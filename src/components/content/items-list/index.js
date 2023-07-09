import Box from '@mui/material/Box';
import factoryFrom from '../../factory/factory-from';
import itemComponents from '../../factory/items/components';

const renderItem = (props, index) => {
  const ItemComponent = factoryFrom(itemComponents);
  return <ItemComponent key={index} {...props} />
};

export default function ItemsList({ id, items }) {
  return (
    items && (
      <Box key={id}>
        <div>
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </Box>)
  );
};
