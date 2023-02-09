import React, {useState} from 'react'
import {MarkerF} from '@react-google-maps/api';
import index from "./flaticon.png";

const onClickHandler = (e) => {
    console.log("marker clicked")
}


const MyMarker = ({lat, lng}) => {
    return (
    <MarkerF
        position={{
            lat: lat,
            lng: lng
        }}
        icon={index}
        onClick = {onClickHandler}
    />
    )
}

export default MyMarker;