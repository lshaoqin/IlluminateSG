import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Apply() {
  const {
    register, 
    handleSubmit
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/home');
  }

  return (
    <div className="formpage">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>Apply to be an illuminator!</h4>
        <TextField 
          label="Type of disability"
          {...register("disability", {required: true})}
        />
        <TextField 
          label="Description"
          multiline
          {...register("description", {required: true})}
        />
        <Button type="submit" variant="contained">SUBMIT</Button>
      </form>
    </div>
  )
}

export default Apply;