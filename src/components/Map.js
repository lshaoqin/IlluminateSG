import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import MapPolygon from './MapPolygon';
import MentorMarker from './MentorMarker';
import MenteeMarker from './MenteeMarker';
import CalcDist from './CalcDist';
import location from '../images/location.png';

const containerStyle = {
  width: '80vw',
  height: '60vh'
};

const origin = { 
  lat: 1.4034441936755713, 
  lng: 103.89470688726108
};

const destination = { 
  lat: 1.400081246394204, 
  lng: 103.91006943963811 
};

const center = {
  lat: 1.4086063582039898,
  lng: 103.91007322952733
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBiMp3tB1SXzTwj2ba8UPBITUUaK0x2WEM"
  });

  const [end, setEnd] = useState(null);
  const [control, setControl] = useState(true)
  const [coord, setCoord] = useState(center);
  
  //supposed to be user's actual location, 
  //hard coded for demo purposes
  //
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       control && setCoord({
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude,
  //       });
  //       setControl(false);
  //     });
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // }, []);

  return isLoaded && (
    <div id="map">
      <CalcDist
        origin={coord}
        destination={end}
      />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coord}
        zoom={14}
      >
        <MarkerF position={coord} icon={location} />
        <MapPolygon/>
        <MentorMarker
          lat={origin.lat}
          lng={origin.lng}
          setEnd={setEnd}
        />
        <MenteeMarker
          lat={destination.lat}
          lng={destination.lng}
          setEnd={setEnd}
        /> 
      </GoogleMap>

    </div>
  )
}

export default Map;