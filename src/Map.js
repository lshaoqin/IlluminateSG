import React from 'react'
import { DistanceMatrixService, GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import MapPolygon from './MapPolygon';
import GeoMarker from './GeoMarker';
import MyMarker from './MyMarker';
import CalcDist from './CalcDist';

const containerStyle = {
  width: '800px',
  height: '800px'
};

const origin = {
  lat: 1.40,
  lng: 103.91
}

const destination = {
  lat:1.4030501906084931,
  lng:103.89538344150134
}

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

  return isLoaded ? (
      <>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          // onLoad={onLoad}
          // onUnmount={onUnmount}
        >

            <CalcDist
              origin={origin}
              destination={destination}
            />

            <MapPolygon/>
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
  ) : <>Unable to load</>
}

export default React.memo(MyComponent)