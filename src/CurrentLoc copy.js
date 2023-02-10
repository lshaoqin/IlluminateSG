import React, { useState, useEffect } from 'react'
import { MarkerF } from '@react-google-maps/api';

const CurrentLoc = () => {
    const [currentLocation, setCurrentLocation] = useState({
        lat: 0,
        lng: 0
      });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
            setCurrentLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
            },
            error => console.log(error)
        );
        })
    console.log("tests12344")
    return (
        <MarkerF 
            position = {currentLocation}   
        />
    )
}

export default CurrentLoc;