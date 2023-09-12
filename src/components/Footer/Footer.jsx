import React from "react";
import "./Footer.css";
import payment_gateways from "./images/guaranteed-safe-checkout_1.png";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="upper">
          <div className="links">
            <h4>QUICK LINKS</h4>
            <Link to="/login"> Courses</Link>
            <Link to="/login"> Login</Link>
            <Link to="/signup"> Sign up</Link>
            <a target={"_blank"} href="https://www.google.com/maps/place/Codeango/@20.0075549,75.1924755,17z/data=!3m1!4b1!4m6!3m5!1s0x3bdb934e76dc4c5d:0x2bdf8b91fa10055a!8m2!3d20.0075549!4d75.1924755!16s%2Fg%2F11tsn2v7wv">
              Sitemap
            </a>
          </div>
          <div className="links">
            <h4> KNOW US</h4>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Term & Conditions</Link>
            <Link to="/">Refund Policy</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-content">
            <h4>SECURED BY:</h4>
            <img src="./images/securedby.webp" alt="" />

            <h4 className="pay-line">WE ARE USING SAFE PAYMENTS:</h4>
            <div className="payment-modes">
               <img src={payment_gateways} alt="visa" />
            </div>
          </div>

          <div className="links">
            <h4>CONTACT</h4>
            <a target={"_blank"} href="mailto:info@codeango.com">
              info@codeango.com
            </a>
            <a target={"_blank"} href="tel:+919903807380">
              Tel: +91 99038 07380
            </a>
            <a target={"_blank"} href="https://www.google.com/maps/place/Codeango/@20.0075549,75.1924755,17z/data=!3m1!4b1!4m6!3m5!1s0x3bdb934e76dc4c5d:0x2bdf8b91fa10055a!8m2!3d20.0075549!4d75.1924755!16s%2Fg%2F11tsn2v7wv">
              R - 77 Bad ke Ali Aurangabad - 431101
            </a>

            <div className="social_links">
              <li className="social_link">
                <a target={"_blank"} rel="noreferrer" href="https://www.facebook.com/people/Codeango/100090437048427/">
                  <img src="./images/facebook.webp" alt="" />
                </a>
              </li>
              <li className="social_link">
                <a target={"_blank"} rel="noreferrer" href="https://www.instagram.com/codeango_learning/?igshid=ZDdkNTZiNTM%3D">
                  <img src="./images/instagram.webp" alt="" />
                </a>
              </li>
              <li className="social_link">
                <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/codeango-learning-672417266/">
                  <img src="./images/linkedin.webp" alt="" />
                </a>
              </li>
              <li className="social_link">
                <a target={"_blank"} rel="noreferrer" href="https://twitter.com/CodeangoC">
                  <img src="./images/twiiter.webp" alt="" />
                </a>
              </li>
              <li className="social_link">
                <a target={"_blank"} rel="noreferrer" href="https://www.youtube.com/channel/UCiRFkFC6mARVsX9bn4KfaTA">
                  <img src="./images/youtube.webp" alt="" />
                </a>
              </li>
            </div>
          </div>
        </div>
        <div className="lower">
          <div className="branding">
            <p>
              {" "}
              &copy; 2023 <span className="brand-name">Codeango Pvt. Ltd..</span>  All Rights Reserved.
            </p>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Footer;
