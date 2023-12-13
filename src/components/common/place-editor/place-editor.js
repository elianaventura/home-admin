import { useState } from "react"
import DynamicMap from "../lazy-map";
import Service from "@/clientService/placesClient";

export default function PlaceEditor ({})  {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [placeCoordinates, setPlaceCoordinates] = useState(null);

  const onChangeAddress = (addr) => {
    setAddress(addr);
  };

  const onSubmitAddress = async () => {
    const coords = await Service.getCoordinates(address);
    const coordsJson = await coords.json();
    console.log(JSON.stringify(coordsJson));
  }

  return (
    <>
      <span>Nombre</span><input type="text" value={name} onChange={(e) => setName(e.target.value)} />;
      <span>Dirección</span><input type="text" value={address} onChange={(e) => onChangeAddress(e.target.value)} /><button onClick={onSubmitAddress}>CONFIRMAR</button>;
      {placeCoordinates && <DynamicMap />}
    </>)
}

