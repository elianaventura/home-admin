import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

// const useMapEvents = dynamic(
//   async () => (await import('react-leaflet')).useMapEvents,
//   {
//     ssr: false,
//   }
// );

export const DynamicMapContainer = dynamic(
  async () => (await import('react-leaflet')).MapContainer,
  {
    ssr: false,
  }
);

export const DynamicTileLayer = dynamic(
  async () => (await import('react-leaflet')).TileLayer,
  {
    ssr: false,
  }
);

export const DynamicMarker = dynamic(
  async () => (await import('react-leaflet')).Marker,
  {
    ssr: false,
  }
);

export const DynamicPopup = dynamic(
  async () => (await import('react-leaflet')).Popup,
  {
    ssr: false,
  }
);

export const LocationMarker = () => {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    click: () => {
      console.log('locate');
      map.locate();
    },
    locationfound: (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}