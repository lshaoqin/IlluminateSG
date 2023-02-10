import { normalLogIn } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, facebookLogIn, googleLogIn } from "../firebase";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";

function Login() {
  const navigate = useNavigate();
  const {
    handleSubmit, 
    register
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    normalLogIn(email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user != null) {
        navigate('/home');
      }
    });
  }, []);

  return (
    <div className="formpage">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          label="Email"
          className="formitem"
          {...register("email", {required: true})}
        />
        <TextField 
          type="password"
          label="Password"
          className="formitem"
          {...register("password", {required: true})}
        />
        <Button 
          type="submit" 
          variant="contained" 
          className="formitem" 
          style={{
            height: '50px', 
            textTransform: 'none', 
            fontSize: '19px', 
            backgroundColor: 'black'
          }}
        >
          Log In
        </Button>
        <Button 
          onClick={() => navigate('/register')}
          variant="outlined" 
          className="formitem" 
          style={{
            height: '50px', 
            textTransform: 'none', 
            fontSize: '19px', 
            color: 'black', 
            border: '1px solid black'
          }}
        >
          Register
        </Button>
        <FacebookLoginButton onClick={facebookLogIn} className="formitem" style={{margin: '0', textAlign: 'center'}} />
        <GoogleLoginButton onClick={googleLogIn} className="formitem" style={{margin: '0'}} />
      </form>
    </div>
  );
}

export default Login;