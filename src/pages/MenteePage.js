import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const MenteePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user == null) {
            navigate('/');
            }
        });
    }, []);

    return (
        <div  className="main">
            <p> (TODO) - Drop a message to them here!</p>
        </div> 
    );
}

export default MenteePage