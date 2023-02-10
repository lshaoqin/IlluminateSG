import React, { useState } from "react";



const CurrentLoc = () => {
        const [coord, setCoord] = useState(null);
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setCoord({lat: position.coords.latitude, lng: position.coords.longitude});
        });

        return (
            <div>
                <h4> You are currently at {coord.lat} E and {coord.lng} N </h4>
            </div>
        );
}

export default CurrentLoc