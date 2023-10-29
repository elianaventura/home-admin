import { Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import styles from "./stock.module.scss";
import Autoselect from "@/components/common/autoselect";

const mapDetails = (items) => {
  return (
    items.map(({ id, expiration_date, brand }) => (
      {
        id,
        expiration_date,
        brand,
      }
    ))
  );
};

export default function StockTable({ columns, items, onChangeDetails }) {
  const [details, setDetails] = useState(items);
  const [itemEditOpen, setItemEditOpen] = useState(false);
  const [itemOnEdition, setItemOnEdition] = useState();
  const handleItemEditOpen = () => setItemEditOpen(true);
  const handleItemEditClose = () => setItemEditOpen(false);

  const onChangeItemBrand = (newBrand) => {
    itemOnEdition.brand = newBrand;
    setDetails([...details]);
    onChangeDetails([...details]);
  };

  const openStockItemEdit = (item) => {
    setItemOnEdition(item);
    handleItemEditOpen();
  };
  
  const renderAction = (item, { id, display }, index) => {
    switch (id) {
      case 'stock_item_edit':
        return (
          <EditIcon key={index} onClick={() => openStockItemEdit(item)} />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((colData, index) => (
                <TableCell key={index}>{colData.display}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {details.map((item, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.expiration_date}</TableCell>
                <TableCell>{item.brand.name}</TableCell>
                <TableCell>{item.actions.map((action, index) => renderAction(item, action, index))}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {
        itemOnEdition && (
          <Modal
            open={itemEditOpen}
            onClose={handleItemEditClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className={styles['item-edit-modal']}>
              <div>
                <span className={styles['item-brand-change-text']}>Marca:</span>
                <Autoselect selected={itemOnEdition.brand} onChange={onChangeItemBrand} />
              </div>
            </div>
          </Modal>
        )
      }
    </>
  );
};
