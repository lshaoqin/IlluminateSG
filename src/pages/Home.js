import { Button } from "@mui/material";
import { logOut } from "../firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import Map from '../components/Map';
import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user == null) {
        navigate('/');
      }
    });
  }, []);

  return (
    <div className="main">
      <Navbar />
      <Map />
    </div>
  );
}

export default Home;