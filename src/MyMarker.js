import React, {useState} from 'react'
import {Marker} from '@react-google-maps/api';
import index from "./index.png";



const MyMarker = ({lat, lng}) => {
    return (
    <Marker
        position={{
            lat: lat,
            lng: lng
        }}
        icon={index}
    />
    )
}

export default MyMarker;