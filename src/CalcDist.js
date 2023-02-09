import { useState, useEffect} from "react";
import { DistanceMatrixService} from '@react-google-maps/api';

const CalcDist = (origin, destination) => {
    const [distance, setDistance] = useState(null);
    const [control, setControl] = useState(true);
    console.log(distance);
    return (
      <>
         control && 
        <DistanceMatrixService
            options={{
              destinations: [{ lat: 1.296788, lng: 103.778961 }],
              origins: [{ lng: 72.89216, lat: 19.12092 }],
              travelMode: "WALKING",
            }}
            callback={(res) => {
              console.log("RESPONSE", res);
              setControl(false)
              setDistance(res.rows[0].elements[0].distance.text);
            }}
          /> 

      </>

    )
}

export default CalcDist;

// const CalcDist = (origin, destination) => {
//     const [distance, setDistance] = useState(0);
//     useEffect(() => {
//         const service = new window.google.maps.DistanceMatrixService();

//         service.getDistanceMatrix({
//             origins: [origin],
//             destinations: [destination],
//             travelMode: 'WALKING'
//         }, (response, status) => {
//             if (status === 'OK') {
//             setDistance(response.rows[0].elements[0].distance.text);
//             }
//         });
//     })
//     console.log(distance)
//     return (
//         <> The distance between the two points is {distance} km </>
//     )
// }

// export default CalcDist;