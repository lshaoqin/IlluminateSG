import { MarkerF } from "@react-google-maps/api";
import React, { useState } from "react";

const CurrentLoc = () => {
        const [control, setControl] = useState(true)
        const [coord, setCoord] = useState({lat: 0, lng: 0});
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            control && setCoord({lat: position.coords.latitude, lng: position.coords.longitude});
            setControl(false);
        });

        return (
            <MarkerF position={coord} />
        );
}

export default CurrentLoc