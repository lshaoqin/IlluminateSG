import React from 'react';
import { PolygonF } from '@react-google-maps/api';


const paths = [
    {lat: 1.4014447199894777, lng: 103.88759115493215},
    {lat: 1.4094024237587763, lng: 103.89519747166747},
    {lat: 1.4201894899933256, lng: 103.90227311496484},
    {lat: 1.4238441130136412, lng: 103.91023321387391},
    {lat: 1.4028594249862727, lng: 103.93216770864555},
    {lat: 1.3868260531116723, lng: 103.91412481777694},
    {lat: 1.397436384903632, lng: 103.90262689713052}
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
    <PolygonF
      paths={paths}
      options={polygonOptions}
    />
  );
}

export default MapPolygon;