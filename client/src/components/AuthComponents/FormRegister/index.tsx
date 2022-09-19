import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import MainButton from "../../MicroComponents/Buttons/MainButton";
import TextField from "../../MicroComponents/Fields/TextFields";
import { AuthFormWrapper, AuthTitle } from "../AuthSection/AuthSection";

//* FORM SCHEMA
const validateRegister = Yup.object({
  username: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(2, "The user name is too short")
    .required("User name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Confirm password is required"),
});

export const FormRegister = () => {
  const navigate = useNavigate();

  type formValues = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  // SUBMIT FORM

  const handleSubmit = async (values: formValues) => {
    const {  password, username, email } = values;

    try {
      await axios.post(process.env.REACT_APP_BASE_URL +"/auth/register", {
        username,
        email,
        password,
      });

      navigate("/login");
    } catch (err) {
      console.log(err)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The username or email are already registered!",
      });
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validateRegister}
      >
        {(formik) => (
          <AuthFormWrapper>
            <div>
              <AuthTitle>Register</AuthTitle>
              <Form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1em",
                }}
              >
                <TextField label="Username" name="username" type="text" />
                <TextField label="Email" name="email" type="email" />
                <TextField label="Password" name="password" type="password" />

                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
                <MainButton type="submit" text="Send" align="center" />
              </Form>
              <Link to="/login" style={{ color: "#1a1918" }}>
                Do you have an account? Login{" "}
              </Link>
            </div>
          </AuthFormWrapper>
        )}
      </Formik>
    </>
  );
};
