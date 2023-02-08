import React, { useState } from 'react';
import Geocoder from './Geocoder';
import MyMarker from './MyMarker';

function ParentComponent() {
  const [location, setLocation] = useState(null);

  const handleLocationFound = location => {
    setLocation(location);
  };

  return (
    <div>
      <Geocoder address="1600 Amphitheatre Parkway, Mountain View, CA" onLocationFound={handleLocationFound} />
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

export default ParentComponent;