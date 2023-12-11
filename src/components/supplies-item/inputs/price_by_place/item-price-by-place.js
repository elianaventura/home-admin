import PlaceEditor from "@/components/common/place-editor/place-editor";
import { Modal } from "@mui/material";
import { useState } from "react";
import styles from './edit-place.module.scss';

export default function PriceByPlace({ title, field_name, handleFieldChange, add_price_action, prices_list }) {
  const [modalOpen, setmodalOpen] = useState(false);

  const onClick = () => {
    setmodalOpen(true);
  };

  return (
    <>
      <button onClick={onClick}>Editar lugares</button>
      <Modal
        open={modalOpen}
        onClose={() => { setmodalOpen(false) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles['edit-place-modal-content']}>
          <PlaceEditor />
         </div>
      </Modal>
    </>
  );
}
