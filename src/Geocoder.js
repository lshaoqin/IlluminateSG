import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

function Geocoder({ address, onLocationFound }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${API_KEY}&sensor=true`
          // `https://maps.googleapis.com/maps/api/geocode/json?address=&key=${API_KEY}`
        );
        const data = response.data;
        if (data.status === 'OK') {
          const result = data.results[0];
          setLocation(result.geometry.location);
          if (onLocationFound) {
            onLocationFound(result.geometry.location);
            console.log(location.lat);
            console.log(location.lng)
          }
        } else {
          console.error(`Geocode was not successful for the following reason: ${
            data.status
          }`);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [address, onLocationFound]);

  return location;
}


export default Geocoder;