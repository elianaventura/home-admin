import dynamic from 'next/dynamic';

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
