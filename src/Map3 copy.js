import React, {useState} from 'react'
import {GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// import MapPolygon from './Polygon';
// import MyMarker from './MyMarker';
// import GeoMarker from './Geocoder';
// import Geocoder from './Geocoder';

const API_KEY = 'AIzaSyASXEL31pfCXtU94PPI_iVXMEA82jpf7AU';

const containerStyle = {
  width: '800px',
  height: '800px'
};






const MyMap = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: {API_KEY}
  })


  // const [maps, setMaps] = useState(null);
  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new maps.LatLngBounds();
  //   paths.forEach(path => {
  //     bounds.extend(path);
  //   });
  //   map.fitBounds(bounds);
  //   setMaps(maps);
  // }, [maps]);
  
   
  // const [polygon, setPolygon] = React.useState(null);
  // const onPolygonLoad = React.useCallback(function callback(polygon) {
  //   setPolygon(polygon);
  // }, []);

 
 
  if (isLoaded) {
    return (
     isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          options={options}
          zoom={10}
          // onLoad={onLoad}
        >
          {/* <MapPolygon/>
          <MyMarker
            lat={1.40}
            lng={103.91}
          />
          <MyMarker
            lat={1.4030501906084931}
            lng={103.89538344150134}
          /> */}
          {/* <GeoMarker
            address = {"Punggol MRT"}
          /> */}
          

          
        </GoogleMap>
    ))}
  else if (loadError) {
    return <div> <p> Map cannot be loaded right now. </p> </div>
  }
}

export default MyMap;