import React, { useState } from 'react'
import {MarkerF, InfoWindowF} from '@react-google-maps/api';
import flag from "../images/flag.png"
import { Link } from 'react-router-dom';

const MenteeMarker = ({ lat, lng, setEnd }) => {
    const [popup, setPopUp] = useState(false);
    return (<>
    <MarkerF
        position={{
            lat: lat,
            lng: lng
        }}
        icon={flag}
        onClick = {() => {
            setPopUp(true);
            setEnd({lat:lat, lng:lng});
        }}
        label="Wayfarer"
        
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
            <Link to="/testmentee">Click here to contact this wayfarer</Link>
        </div>
        </InfoWindowF>}
    </>
    )
}

export default MenteeMarker;