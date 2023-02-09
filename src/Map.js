import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import MapPolygon from './MapPolygon';
import GeoMarker from './GeoMarker';
import MyMarker from './MyMarker';
import CalcDist from './CalcDist';

const containerStyle = {
  width: '800px',
  height: '800px'
};

const origin = { 
  lat: 1.4034441936755713, 
  lng: 103.89470688726108
};

const destination = { 
  lat: 1.400081246394204, 
  lng: 103.91006943963811 };



const center = {
  lat: 1.4086063582039898,
  lng: 103.91007322952733
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  return isLoaded && (
    <>
      {/* <CalcDist
        origin={origin}
        destination={destination}
      /> */}

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >



        {/* <MapPolygon/> */}
        <MyMarker
          lat={origin.lat}
          lng={origin.lng}
        />
        <MyMarker
          lat={destination.lat}
          lng={destination.lng}
        /> 
        {/* <GeoMarker
          address = {"Punggol MRT"}
        /> */}
      </GoogleMap>

    </>
  )
}

export default React.memo(MyComponent)