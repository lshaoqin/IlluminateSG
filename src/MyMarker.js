import React, {useState} from 'react'
import {MarkerF} from '@react-google-maps/api';
import index from "./flaticon.png";



const MyMarker = ({lat, lng}) => {
    return (
    <MarkerF
        position={{
            lat: lat,
            lng: lng
        }}
        icon={index}
    />
    )
}

export default MyMarker;