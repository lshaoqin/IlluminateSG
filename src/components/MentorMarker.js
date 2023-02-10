import React, { useState } from 'react';
import {MarkerF, InfoWindowF} from '@react-google-maps/api';
import heart from '../images/heart.png';
import { Link } from 'react-router-dom';

const MentorMarker = ({ lat, lng, setEnd }) => {
    const [popup, setPopUp] = useState(false);
    return (<>
    <MarkerF
        position={{
            lat: lat,
            lng: lng
        }}
        icon={heart}
        onClick = {() => {
            setPopUp(true);
            setEnd({lat:lat, lng:lng});
        }}
        label="Mentor"
    />
    {popup && <InfoWindowF
        position={{lat: lat, lng: lng}}
        onCloseClick={() => {
            setPopUp(false);
            setEnd(null);
        }}
        >
        <div>
            <p>
            Type of disability: XXXX <br/>
            Description: XXXX
            </p>
            <Link to="/testmentor">Click here to contact your mentor</Link>
        </div>
        </InfoWindowF>}
    </>
    )
}

export default MentorMarker;