import { Button } from "@mui/material";
import { logOut } from "../firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import CurrentLoc from '../CurrentLoc';
import Map from '../Map';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    logOut();
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user == null) {
        navigate('/');
      }
    });
  }, []);

  return (
    <div>
      {auth.currentUser
      ? auth.currentUser.displayName
      : <Navigate to="/" />}
      <CurrentLoc />
      <Map />
      <Button onClick={handleClick}>SIGN OUT</Button>
      <Button onClick={() => navigate('/test')}>Test</Button>
    </div>
  );
}

export default Home;