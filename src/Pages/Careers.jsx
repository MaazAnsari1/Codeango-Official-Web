import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./careers.css";
const Careers = () => {
  const [role, setrole] = useState("");
  const [careerCredentials, setcareerCredentials] = useState({ name: "", email: "", role: "" });
  const onChangeHandler = (e) => {
    setcareerCredentials({ ...careerCredentials, [e.target.name]: e.target.value });
  };
  const applyJob = (e) => {
    setrole("");
    setModal(true);
    setrole(e.target.name);
  };
  const closeModal = (e) => {
    e.preventDefault();
    setcareerCredentials({ name: "", email: "", role: "" });
  };
  const applyHandler = (e) => {
    e.preventDefault();
    setrole("");
    setcareerCredentials({ name: "", email: "", role: "" });
    setModal(false);
  };
  const [modal, setModal] = useState(false);
  return (
    <div className="careers">
      <h1>Careers</h1>
      <div className="career_wrapper">
        <div className="career_img">
          <img src="./images/career.png" alt="" />
        </div>
        <div className="job_opening_wrapper">
          <div className="job_opening">
            <div className="job_img">
              <img src="https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?size=338&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=ais" alt="" />
            </div>
            <div className="job_content">
              <h4>
                Web Developer <span> - India </span>{" "}
              </h4>

              <p>
                A Web Developer is a professional who is responsible for the design and construction of websites. They ensure that sites meet user expectations by ensuring they look good, run smoothly and offer easy access points with no loading issues between pages or error
                messages.
              </p>

              <input name="Web Developer" type="button" value="Apply" className="apply_job" onClick={(e) => applyJob(e)} />
            </div>
          </div>
          <div className="job_opening">
            <div className="job_img">
              <img src="https://img.freepik.com/free-vector/professor-concept-illustration_114360-4226.jpg?size=338&ext=jpg&ga=GA1.1.1777897027.1675625974&semt=sph" alt="" />
            </div>
            <div className="job_content">
              <h4>
                Trainer <span> - India </span>{" "}
              </h4>

              <p>
                We are excited to announce that our Education Department is actively looking for a talented and experienced Online Trainers. Who are responsible for teaching multiple technologies. Your main goal will be to prepare and teach lessons to students using an online
                platform.
              </p>

              <input name="Trainer" type="button" value="Apply" className="apply_job" onClick={(e) => applyJob(e)} />
            </div>
          </div>
          <div className="job_opening">
            <div className="job_img">
              <img src="https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?size=338&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=ais" alt="" />
            </div>
            <div className="job_content">
              <h4>
                Graphics Designer <span> - India </span>{" "}
              </h4>

              <p>
                A graphics designer knows how to present concepts that are aligned with our business images and goals. With one foot in the artistic designer can be a significant value add to our company, brand and bottom line. Who uses their artistic abilities to help
                communicate ideas visually for the company.
              </p>
              <input name="Graphics Designer" type="button" value="Apply" className="apply_job" onClick={(e) => applyJob(e)} />
            </div>
          </div>
        </div>
      </div>
      <div className="send_resume">
        <p>Didn’t Find the Position You’re Looking for? Send Us Your CV</p>
        <input type="button" value="Apply Now" className="apply_btn" onClick={() => setModal(true)} />
      </div>
      <div className={modal ? "apply_job_modal modal_active" : "apply_job_modal"}>
        <div className="close_modal" style={{ textAlign: "end", marginRight: "10px", cursor: "pointer" }}>
          <CloseIcon onClick={() => setModal(false)} />
        </div>
        <form action="" className="form" onSubmit={applyHandler}>
          <div className="career-name">
            <TextField required autoComplete="true" onChange={onChangeHandler} value={careerCredentials.name} className="input-name" id="input-name" label="Name" name="name" type="text" />
          </div>
          <div className="career-email">
            <TextField required autoComplete="true" onChange={onChangeHandler} value={careerCredentials.email} className="input-email" id="input-email" label="Email" name="email" type="email" />
          </div>
          <div className="career-role">
            <TextField required autoComplete="true" onChange={onChangeHandler} value={role.length > 0 ? role : careerCredentials.role} className="input-role" id="input-role" label="Role" name="role" type="text" />
          </div>
          <div className="career-resume">
            <label style={{ marginBottom: "6px" }} htmlFor="input-resume">
              Resume*
            </label>
            <TextField required autoComplete="true" className="input-resume" id="input-resume" name="resume" type="file" />
          </div>
          <div className="career-button">
            <button type="submit" className="input-button">
              APPLY
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Careers;
