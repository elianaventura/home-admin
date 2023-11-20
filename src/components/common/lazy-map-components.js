import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

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

export const LocationMarkers = () => {
  const [markers, setMarkers] = useState([]);

  let defaultIcon = L.icon({
    iconUrl: '/images/marker-icon.png',
    shadowUrl: '/images/marker-shadow.png'
  });

  useMapEvents({
    click: (e) => {
      setMarkers([
        ...markers,
        {
          position: e.latlng,
          icon: defaultIcon,
        },
      ]);
    },
  });

  return markers.map((marker, index) => (
    <Marker key={`marker_${index}`} position={marker.position} icon={marker.icon}>
      <Popup>New place!</Popup>
    </Marker>
  ));
}
