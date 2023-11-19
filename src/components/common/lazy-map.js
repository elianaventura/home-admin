import { useEffect, useState } from 'react';
import { DynamicMapContainer, DynamicTileLayer, DynamicMarker, DynamicPopup } from '../common/lazy-map-components';
import 'leaflet/dist/leaflet.css';
import styles from './map.module.scss';
import dynamic from 'next/dynamic';

const DynamicLocationMarker = dynamic(
  async () => (await import('@/components/common/lazy-map-components')).LocationMarkers,
  {
    ssr: false,
  }
);

export default function DynamicMap() {
  const [showMap, setShowMap] = useState(false);
  useEffect(() => {
    setShowMap(true);
  }, []);

  return (
    <div style={{ maxWidth:"500px", maxHeight: "500px" }}>
      {showMap && (
        <DynamicMapContainer
          center={{ lat: 51.505, lng: -0.09 }}
          zoom={13}
          scrollWheelZoom={false}
          className={styles['map-container']}>
          <DynamicTileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <DynamicLocationMarker />
        </DynamicMapContainer>
      )}
    </div>);
};
