import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { logOut } from "../firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        logOut();
    };

    return (
        <nav>
            <Link to="/home" style={{textDecoration: 'none', color: 'black'}}>IlluminateSG</Link>
            <Button onClick={handleClick} variant="contained">SIGN OUT</Button>
        </nav>
    )
}

export default Navbar;