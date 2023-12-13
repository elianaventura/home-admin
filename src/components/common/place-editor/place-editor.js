import { useState } from "react"
import DynamicMap from "../lazy-map";

export default function PlaceEditor ({})  {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [placeCoordinates, setPlaceCoordinates] = useState(null);

  const onChangeAddress = (addr) => {
    setAddress(addr);
  };

  return (
    <>
      <span>Nombre</span><input type="text" value={name} onChange={(e) => setName(e.target.value)} />;
      <span>Dirección</span><input type="text" value={address} onChange={(e) => onChangeAddress(e.target.value)} />;
      {placeCoordinates && <DynamicMap />}
    </>)
}

