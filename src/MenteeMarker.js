import React, {useState} from 'react'
import {MarkerF, InfoWindowF} from '@react-google-maps/api';
import flag from "./flag.png"


const onClickHandler = ({lat, lng}) => {
    console.log("onclick fired");
    return (
        <InfoWindowF
        position={{lat: lat, lng: lng}}
        >
        <div>
            <a href="./MenteePage">Click here to contact your mentee</a>
        </div>
        </InfoWindowF>
    )
}


const MenteeMarker = ({lat, lng}) => {
    return (
    <MarkerF
        position={{
            lat: lat,
            lng: lng
        }}
        icon={flag}
        onClick = {() => onClickHandler(lat, lng)}
    />
    )
}

export default MenteeMarker;