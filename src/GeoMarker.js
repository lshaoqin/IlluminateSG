import React, { useState } from 'react';
import Geocoder from './Geocoder';
import MyMarker from './MyMarker';

const GeoMarker = (address) => {
  const [location, setLocation] = useState(null);

  const handleLocationFound = location => {
    setLocation(location);
    console.log(location.lat);
    console.log(location.lng);
  };

  return (
    <div>
      <Geocoder 
        address={address}
        onLocationFound={handleLocationFound} />
      <p>Your location is at {location.lat} E and {location.lat} N </p>
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