import React, { useState, useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L, { LatLngTuple } from "leaflet";
import iconLocation from '../static/images/icon-location.svg';

type MapProps = {
  userPosition: LatLngTuple | null;
};

const Map: React.FC<MapProps> = ({ userPosition }) => {
  const [position, setPosition] = useState<LatLngTuple | null>(userPosition);
  const map = useMap();

  const CustomIcon = useMemo(
    () =>
      new L.Icon({
        iconUrl: iconLocation,
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      }),
    []
  );

  useEffect(() => {
    if (userPosition) {
      setPosition(userPosition);
      if (map) {
        const animationOptions = { duration: 2 };
        map.flyTo(userPosition, 13, animationOptions);
      }
    }
  }, [userPosition, map]);

  return (
    <div>
      {position && (
        <>
          <MapContainer center={position} zoom={13} zoomControl={false}>
       
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={CustomIcon}>
              <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
            </Marker>
          </MapContainer>
        </>
      )}
    </div>
  );
};

export default Map;
