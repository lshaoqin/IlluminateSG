import { Button } from "@mui/material";
import { Navigate } from "react-router-dom";
import { auth, logOut } from "../firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        logOut();
    };

    return (
        <nav>
            Welcome, {auth.currentUser
            ? auth.currentUser.displayName
            : <Navigate to="/" />}
            <div style={{display: 'flex', gap: '5px'}}>
                <Button onClick={() => navigate('/apply')} variant="outlined">BE AN ILLUMINATOR</Button>
                <Button onClick={handleClick} variant="contained">SIGN OUT</Button>
            </div>
        </nav>
    )
}

export default Navbar;