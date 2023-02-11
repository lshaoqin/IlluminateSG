import { getData } from "../firebase";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import Map from '../components/Map';
import Navbar from "../components/Navbar";
import FilterForm from "../components/FilterForm";
import logo from '../images/logo.png';

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user == null) {
        navigate('/');
      }
    });
  }, []);

  useEffect(() => {
    getData(setData);
  }, [])

  return (
    <div className="main">
      <Navbar />
      <img src={logo} style={{width: "100vw", height: "auto"}} alt="test" />
      <Map />
      <FilterForm data={data} />
    </div>
  );
}

export default Home;