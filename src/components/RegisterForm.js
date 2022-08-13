import React from "react";
import { Formik, Form } from "formik";
import InputField from "./InputField";
import * as Yup from "yup";

const RegisterForm = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 character or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 character or less")
      .required("Required"),
    email: Yup.string()
      .email("Email is invalid")
      .required("Required"),
    password: Yup.string()
      .max(8, "Password must be atleast 8 character or more")
      .required("password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "password must match")
      .required("Confirm Password is Required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={values => console.log(values)}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold display-4">Sign Up</h1>
          {/* {console.log(formik.values)} */}
          <Form>
            <InputField label="First Name" name="firstName" type="text" />
            <InputField label="Last Name" name="lastName" type="text" />
            <InputField label="Email" name="email" type="text" />
            <InputField label="password" name="password" type="password" />
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button className="btn btn-dark mt-3" type="submit">
              Register
            </button>
            <button
              className="btn btn-danger mt-3"
              type="reset"
              style={{ marginLeft: "10px" }}
            >
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
