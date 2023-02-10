import { useState, useEffect} from "react";

const CalcDist = ({origin, destination}) => {
    const [distance, setDistance] = useState(0);
    const [time, setTime] = useState(0);
    useEffect(() => {
        const service = new window.google.maps.DistanceMatrixService();

        service.getDistanceMatrix({
            origins: [origin],
            destinations: [destination],
            travelMode: 'WALKING'
        }, (response, status) => {
            if (status === 'OK') {
            setDistance(response.rows[0].elements[0].distance.text);
            setTime(response.rows[0].elements[0].distance.time);
            }
        });
    })
    console.log(distance)
    return (
        <> The distance between the two points is {distance} and will take approximately {time}</>
    )
}

export default CalcDist;