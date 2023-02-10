import { useState, useEffect} from "react";

const CalcDist = ({origin, destination}) => {
    const [distance, setDistance] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        if (destination != null) {
            const service = new window.google.maps.DistanceMatrixService();

            service.getDistanceMatrix({
                origins: [origin],
                destinations: [destination],
                travelMode: 'WALKING'
            }, (response, status) => {
                if (status === 'OK') {
                    console.log(response)
                setDistance(response.rows[0].elements[0].distance.text);
                setTime(response.rows[0].elements[0].duration.text);
                }
            });
        }
    }, [origin, destination])

    return (
        destination && <> The person is {distance} away and will take approximately {time} to walk</>
    )
}

export default CalcDist;