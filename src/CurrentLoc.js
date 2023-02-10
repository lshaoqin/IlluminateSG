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
            <div>
                <h4> You are currently at {coord.lat} E and {coord.lng} N </h4>
            </div>
        );
}

export default CurrentLoc