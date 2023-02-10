import React, {useState} from 'react'
import {MarkerF, InfoWindowF} from '@react-google-maps/api';
import heart from './heart.png'


const onClickHandler = ({lat, lng}) => {
    return (
        <InfoWindowF
        position={{lat: lat, lng: lng}}
        >
        <div>
            <a href="./MentorPage">Click here to contact your mentor</a>
        </div>
        </InfoWindowF>
    )
}


const MentorMarker = ({lat, lng}) => {
    return (
    <MarkerF
        position={{
            lat: lat,
            lng: lng
        }}
        icon={heart}
        onClick = {onClickHandler}
    />
    )
}

export default MentorMarker;