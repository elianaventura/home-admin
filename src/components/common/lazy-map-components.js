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

export const LocationMarkers = ({ marked }) => {
  let defaultIcon = L.icon({
    iconUrl: '/images/marker-icon.png',
    shadowUrl: '/images/marker-shadow.png'
  });

  const markedInitial = (marked || []).map(loc => ({ ...loc, icon: defaultIcon }));

  const [markers, setMarkers] = useState(markedInitial);

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

  const markerHandlers = {
    click: (e) => {
      setMarkers(markers.filter(marker => marker.position !== e.latlng));
    }
  };

  return markers.map((marker, index) => (
    <Marker key={`marker_${index}`} position={marker.position} icon={marker.icon} eventHandlers={markerHandlers}>
      <Popup>New place!</Popup>
    </Marker>
  ));
}
