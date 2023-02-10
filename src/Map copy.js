import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const MapContainer = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBiMp3tB1SXzTwj2ba8UPBITUUaK0x2WEM",
  });
  const [currentLocation, setCurrentLocation] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return isLoaded && !loadError ? (
    <GoogleMap
      zoom={14}
      center={{
        lat: currentLocation.lat,
        lng: currentLocation.lng,
      }}
    >
      <Marker position={currentLocation} />
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
};

export default MapContainer;
