import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./corporate_form.css";

function Corporate_form() {
  const handleSubmit = (event) => {
    toast.success("Account Created successfully!");
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      organization: data.get("organization"),
      query: data.get("query"),
    });
  };

  return (
    <div className="corporate">
      <div className="form_wrapper">
        <div className="from_head">
          <h2>REACH US RIGHTAWAY</h2>
        </div>

        <form action="" onSubmit={handleSubmit} className="form">
          <div className="corporate_name">
            <TextField required autoComplete="true" className="input-name" id="input-name" label="Full Name" name="Name" type="text" />
          </div>

          <div className="corporate_phone">
            <TextField required autoComplete="true" className="input-phone" id="input-phone" label="Phone No." name="phone" type="number" />
          </div>

          <div className="corporate_email">
            <TextField required autoComplete="true" className="input-email" id="input-email" label="Email" name="email" type="email" />
          </div>

          <div className="corporate_organization">
            <TextField required autoComplete="true" className="input-organization" id="input-organization" label="Organization Name" name="organization" type="text" />
          </div>

          <div className="corporate_query">
            <TextField required autoComplete="true" className="input-query" id="input-query" label="Message" name="query" type="text" />
          </div>

          <div className="button">
            <button type="submit" className="input-button">
              {/* {spinner ? <TailSpin height={25} color="#fff" wrapperStyle={{ justifyContent: "center" }} /> : "SIGN UP"} */}
              Submit
            </button>
          </div>

          <div className="copyright">
            <p>
              Copyright © <Link to="/">Codeango</Link> {new Date().getFullYear()}{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Corporate_form;
