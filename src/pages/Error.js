import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Error() {
    return (
        <div id="error">
            <div className="main">
                <h1>404 Page Not Found</h1>
                <Link to="/home"><Button>Go Home</Button></Link>
            </div>
        </div>
    );
}

export default Error;