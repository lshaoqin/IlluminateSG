import React, { useState } from 'react';
import Geocoder from './Geocoder';
import MyMarker from './MyMarker';

const GeoMarker = ({address}) => {
  const [location, setLocation] = useState(null);

  const handleLocationFound = location => {
    setLocation(location);
  };

  return (
    <div>
      <Geocoder 
        address={address}
        onLocationFound={handleLocationFound} />
      {location ? (
        <MyMarker
            lat= {location.lat}
            lng= {location.lng}
        />
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default GeoMarker;