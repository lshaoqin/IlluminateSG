import { useState, useEffect} from "react";
import { DistanceMatrixService} from '@react-google-maps/api';

// const CalcDist = (origin, destination) => {
//     const [distance, setDistance] = useState(null);
//     const [control, setControl] = useState(true);
    
    
//     useEffect(() => {
//       setControl(true);
//     }, [destination]);

//     console.log(distance);

//     return (
//       <>
//         {control && (
//         <DistanceMatrixService
//             options={{
//               destinations: [destination],
//               origins: [origin],
//               travelMode: "WALKING",
//             }}
//             callback={(res) => {
//               console.log("RESPONSE", res);
//               setControl(false)
//               setDistance(res.rows[0].elements[0].distance.text);
//             }}
//           />
//         )}
//         {distance !== null && <div>{distance}</div>}
//       </>
//     );
// };

// export default CalcDist;

const originCoordinate = { lat: 1.4034441936755713, lng: 103.89470688726108};
const destinationCoordinate = { lat: 1.400081246394204, lng: 103.91006943963811 };

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
            setDistance(response.rows[0].elements[0].distance.time);
            }
        });
    })
    console.log(distance)
    return (
        <> The distance between the two points is {distance} and will take approximately {time}</>
    )
}

export default CalcDist;