import React, { useState } from 'react';
import { useLoadScript, GoogleMap, Polygon } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const options = {
  zoomControl: true
};

const polygonOptions = {
    fillColor: '#ff0000',
    fillOpacity: 0.35,
    strokeColor: '#ff0000',
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
  };

const paths = [
  { lat: 1.3986, lng: 103.907 },
  { lat: 1.3901, lng: 103.9135 },
  { lat: 1.3944, lng: 103.9245 },
  { lat: 1.4041, lng: 103.9189 }
];

function MapWithPolygon() {
  const [maps, setMaps] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'YOUR_API_KEY'
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new maps.LatLngBounds();
    paths.forEach(path => {
      bounds.extend(path);
    });
    map.fitBounds(bounds);
    setMaps(map)
  }, [maps]);

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      options={options}
      onLoad={onLoad}
    >
      <Polygon 
        paths={paths}
        options={polygonOptions} 
        />
        
    </GoogleMap>
  );
}

export default MapWithPolygon;