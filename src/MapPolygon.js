import React from 'react';
import { Polygon } from '@react-google-maps/api';


const paths = [
    { lat: 1.420069, lng: 103.921580 },
    { lat: 1.400706, lng: 103.927221 },
    { lat: 1.394183, lng: 103.923497 },
    { lat: 1.383335, lng: 103.927269 },
    { lat: 1.390822, lng: 103.939656 },
    { lat: 1.394875, lng: 103.953339 },
    { lat: 1.406105, lng: 103.957667 },
    { lat: 1.414072, lng: 103.946590 },
    { lat: 1.420069, lng: 103.921580 },
  ];
  
     
  const polygonOptions = {
    fillColor: '#ff0000',
    fillOpacity: 0.05,
    strokeColor: '#ff0000',
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
  };

  
const MapPolygon = () => {
  return (
    <Polygon
      paths={paths}
      options={polygonOptions}
    />
  );
}

export default MapPolygon;