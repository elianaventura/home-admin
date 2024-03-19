import { Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useContext, useState } from "react";
import styles from "./edit-place.module.scss";
import Autoselect from "@/components/common/autoselect";
import ShoppingPlacesContext from "@/components/context/shopping-places";

export default function PriceByPlaceTable({ columns, places, onChangeDetails }) {
  const [details, setDetails] = useState(places);
  const [placeEditOpen, setPlaceEditOpen] = useState(false);
  const [placeOnEdition, setPlaceOnEdition] = useState();
  const { places, setShoppingPlaces } = useContext(ShoppingPlacesContext);
  const handlePlaceEditOpen = () => setPlaceEditOpen(true);
  const handlePlaceEditClose = () => setPlaceEditOpen(false);

  const onChangePlace = (newPlace) => {
    placeOnEdition.place = newPlace;
    setDetails([...details]);
    onChangeDetails([...details]);
  };

  const openPriceByPlaceEdit = (place) => {
    setPlaceOnEdition(place);
    handlePlaceEditOpen();
  };
  
  const renderAction = (place, { id, display }, index) => {
    switch (id) {
      case 'price_by_place_edit':
        return (
          <EditIcon key={index} onClick={() => openPriceByPlaceEdit(place)} />
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
            {details.map((place, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{place.place_id}</TableCell>
                <TableCell>{place.place_name}</TableCell>
                <TableCell>{place.actions.map((action, index) => renderAction(place, action, index))}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {
        placeOnEdition && (
          <Modal
            open={placeEditOpen}
            onClose={handlePlaceEditClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className={styles['place-edit-modal']}>
              <div>
                <span className={styles['place-brand-change-text']}>Marca:</span>
                <Autoselect
                  selected={placeOnEdition.brand}
                  onChange={onChangePlaceBrand}
                  allOptions={brands}
                  setAllOptions={setBrands}
                />
              </div>
            </div>
          </Modal>
        )
      }
    </>
  );
};
