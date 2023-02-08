import React, {useState} from 'react'
import {Marker} from '@react-google-maps/api';



const MyMarker = ({lat, lng}) => {
    return (
    <Marker
        // onLoad={onLoad}
        position={{
            lat: lat,
            lng: lng
        }}
    />
    )
}

export default MyMarker;