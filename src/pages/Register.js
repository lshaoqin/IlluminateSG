import { signUp } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Radio, RadioGroup, FormControl, FormControlLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { isEmail, isAlpha } from 'validator';

function Register() {
  const navigate = useNavigate();
  const {
    handleSubmit, 
    register, 
    getValues, 
    formState: { errors }
  } = useForm();
  const [type, setType] = useState("Illuminator");

  const onSubmit = (data) => {
    const { name, email, password, disability, description, neighbourhood } = data;
    signUp(name, email, password, disability, description, neighbourhood, type);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/home');
      }
    });
  }, []);

  return (
    <div className="formpage main">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          label="Name"
          className="formitem"
          error={Boolean(errors?.name)}
          helperText={errors?.name ? errors.name.message : ""}
          {...register("name", {
            required: true, 
            validate: name => isAlpha(name, ['en-US'], {'ignore': ' _-'}) || "No special characters"
          })}
        />
        <TextField 
          label="Email"
          className="formitem"
          error={Boolean(errors?.email)}
          helperText={errors?.email ? errors.email.message : ""}
          {...register("email", {
            required: true, 
            validate: email => isEmail(email) || "Invalid email address"
          })}
        />
        <TextField 
          type="password"
          label="Password"
          className="formitem"
          error={Boolean(errors?.password)}
          helperText={errors?.password ? errors.password.message : ""}
          {...register("password", {
            required: true,  
            minLength: {
                value: 8, 
                message: 'Minimum 8 characters'
            }
          })}
        />
        <TextField 
          type="password"
          label="Confirm Password"
          className="formitem"
          error={Boolean(errors?.confirmpassword)}
          helperText={errors?.confirmpassword ? errors.confirmpassword.message : ""}
          {...register("confirmpassword", {
            required: true, 
            validate: password => password === getValues("password") || "Password is not the same"
          })}
        />
        <TextField 
          label="Type of Disability"
          className="formitem"
          error={Boolean(errors?.disability)}
          helperText={errors?.disability ? errors.disability.message : ""}
          {...register("disability", {
            required: true, 
            validate: disability => isAlpha(disability, ['en-US'], {'ignore': ' _-'}) || "No special characters"
          })}
        />
        <TextField 
          label="Neighbourhood"
          className="formitem"
          error={Boolean(errors?.neighbourhood)}
          helperText={errors?.neighbourhood ? errors.neighbourhood.message : ""}
          {...register("neighbourhood", {
            required: true, 
            validate: neighbourhood => isAlpha(neighbourhood, ['en-US'], {'ignore': ' _-'}) || "No special characters"
          })}
        />
        <TextField 
          label="Description"
          className="formitem"
          error={Boolean(errors?.description)}
          multiline
          minRows={5}
          maxRows={5}
          {...register("description", {required: true})}
        />
        <FormControl>
          <RadioGroup
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            row
          >
            <FormControlLabel value="Illuminator" control={<Radio />} label="Illuminator" />
            <FormControlLabel value="Wayfarer" control={<Radio />} label="Wayfarer" />
          </RadioGroup>
        </FormControl>
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
          Register
        </Button>
        <Button 
          onClick={() => navigate('/')}
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
          Cancel
        </Button>
      </form>
    </div>
  );
}

export default Register;