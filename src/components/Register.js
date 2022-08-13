import React from "react";
import rocket from "../assets/rocket-1.png";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <RegisterForm />
        </div>
        <div className="col-md-7 my-auto">
          <img src={rocket} alt="rocket" className="img-fluid w-75" />
        </div>
      </div>
    </div>
  );
};

export default Register;
