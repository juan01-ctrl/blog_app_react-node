import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Swal from "sweetalert2";

import MainButton from "../../MicroComponents/Buttons/MainButton";
import TextField from "../../MicroComponents/Fields/TextFields";
import { AuthFormWrapper, AuthTitle } from "../AuthSection/AuthSection";
import { useContext } from "react";
import { AuthContext } from "../../../context/Context";
import { LoginStart, LoginSuccess, LoginFailure } from '../../../context/Actions';

//* FORM SCHEMA
const validateLogin = Yup.object({
  username: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(2, "The user name is too short")
    .required("User name is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
});

//

export const FormLogin = () => {

  const {dispatch} = useContext(AuthContext)

  const navigate = useNavigate();

  type formValues = {
    username: string;
    password: string;  
  };


    // SUBMIT FORM

    const handleSubmit = async (values: formValues) => {
      const { password, username,  } = values;
  
      dispatch(LoginStart)
      try {
        const {data} = await axios.post(process.env.REACT_APP_BASE_URL + "/auth/login", {
          username,
          password,
        });
        dispatch(LoginSuccess(data))
  
        navigate("/");
      } catch (err) {
        dispatch(LoginFailure())

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect username or password!",
        });
      }
    };
  

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validateLogin}
      >
        {(formik) => (
          <AuthFormWrapper>
            <div>
              <AuthTitle>Login</AuthTitle>
              <Form style={{display:"flex",flexDirection:"column",marginBottom:"1em"}}>
                <TextField label="Username" name="username" type="text" />
                <TextField label="Password" name="password" type="password" />
                <MainButton type="submit" text="Send" align="center"/>
              </Form>
              <Link to="/register" style={{color:"#1a1918"}}> Don't have an account yet? Sign Up</Link>
            </div>
          </AuthFormWrapper>
        )}
      </Formik>
    </>
  );
};


