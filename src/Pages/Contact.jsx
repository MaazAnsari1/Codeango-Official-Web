import { color } from "@mui/system";
import React, { useReducer, useState } from "react";
import "./contact.css";

const Contact = () => {
  const [contactData, setcontactData] = useState({ query: "", phone: "", email: "" });

  const [modal, setModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setcontactData({ query: "", phone: "", email: "" });
    console.log({
      query: data.get("contactQuery"),
      email: data.get("contactEmail"),
    });
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 12000);
  };
  const onChangeHandler = (e) => {
    setcontactData({ ...contactData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="contact">
        <div className="contact_wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-head">
              <h2>Contact Us</h2>
            </div>
            <div className="customer_query">
              <input onChange={(e) => onChangeHandler(e)} value={contactData.query} required autoComplete="true" type="text" placeholder="What's your query?" className="contact_Query" id="contactQuery" name="query" />
            </div>
            <div className="customer_email">
              <input onChange={(e) => onChangeHandler(e)} value={contactData.phone} required autoComplete="true" type="number" placeholder="enter your phone no." className="contact_email" id="contactEmail" name="phone" />
            </div>
            <div className="customer_email">
              <input onChange={(e) => onChangeHandler(e)} value={contactData.email} required autoComplete="true" type="email" placeholder="enter your email " className="contact_email" id="contactEmail" name="email" />
            </div>
            <button type="submit" className="contact_btn">
              Send{" "}
            </button>
          </form>
          <div className="contact_img">
            <img src="./images/contact.png" alt="" />
          </div>
        </div>

        <div className="contact_details">
          <div className="company_email" href="mailto:info@codeango.com" target="_blank">
            {" "}
            <h4>EMAIL:</h4>
            <a href="mailto:info@codeango.com">info@codeango.com </a>{" "}
          </div>

          <div className="company_phone" href="tel:+919903807380" target="_blank">
            {" "}
            <h4>PHONE:</h4>
            <a href="tel:+919903807380" target={"_blank"}>
              {" "}
              +91 99038 07380{" "}
            </a>
          </div>

          <div className="company_fax" href="fax:+1-234-567-8900" target="_blank">
            {" "}
            <h4>FAX:</h4>
            <a href="fax:+1-234-567-8900" target={"_blank"}>
              {" "}
              +1-234-567-8900{" "}
            </a>
          </div>

          <div className="company_address" href="https://www.google.com/maps/place/Codeango/@20.0075549,75.1924755,17z/data=!3m1!4b1!4m6!3m5!1s0x3bdb934e76dc4c5d:0x2bdf8b91fa10055a!8m2!3d20.0075549!4d75.1924755!16s%2Fg%2F11tsn2v7wv" target="_blank">
            {" "}
            <h4>OUR MAIN OFFICE</h4>
            <a href="https://www.google.com/maps/place/Codeango/@20.0075549,75.1924755,17z/data=!3m1!4b1!4m6!3m5!1s0x3bdb934e76dc4c5d:0x2bdf8b91fa10055a!8m2!3d20.0075549!4d75.1924755!16s%2Fg%2F11tsn2v7wv" target={"_blank"}>
              {" "}
              K - 77 Bad ke Ali Aurangabad - 431101{" "}
            </a>
          </div>
        </div>
      </div>
      <div className={modal ? "query_submit_modal modal_active" : "query_submit_modal"}>
        <p>Thank You for contacting us! We will be responding withing 24 hours to the email entered</p>
        <button onClick={() => setModal(false)}>OK</button>
      </div>
    </>
  );
};

export default Contact;
// https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg?size=626&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=ais

//  https://img.freepik.com/free-vector/contact-us-landing-page-illustration_52683-18236.jpg?size=626&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=ais
