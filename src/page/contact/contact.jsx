import React, { useEffect, useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import "./contact.css";
import newRequest from "../../utils/newRequest";

function Contact() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    message: "",
    checkboxOne: "Unchecked rules One",
    checkboxTwo: "Unchecked rules Two",
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      
        setLoading(true);
        const res = await newRequest.post('/api/contact/', formData)

        setFormData({
          fName: "",
          lName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          message: "",
          checkboxOne: "Unchecked rules One",
          checkboxTwo: "Unchecked rules Two",
        });
      

      setLoading(false);
    } catch (error) {}
    setLoading(false);
  }

  useEffect(() => {
    const button = document.querySelector(".btn");
    if (loading) {
      button.innerHTML = "Submiting...";
      button.style.background = "#1c1e31";
      button.style.cursor = "not-allowed";
    } else {
      button.innerHTML = "Submit";
      button.style.background = "#0c0d1b";
      button.style.cursor = "pointer";
    }
  }, [loading]);

  function handleChange(event) {
    const { value, name } = event.target;

    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  } 

  return (
    <div className="contact">
      <div className="container">
        <div className="title">
          <h1>Contact Us</h1>
        </div>
        <div className="contactWrapper">
          <form onSubmit={handleSubmit}>
            <div className="nameField">
              <input
                type="text"
                placeholder="First Name"
                name="fName"
                onChange={handleChange}
                value={formData.fName}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lName"
                onChange={handleChange}
                value={formData.lName}
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <input
              type="number"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              required
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={handleChange}
              value={formData.address}
              required
            />
            <div className="location">
              <input
                type="text"
                placeholder="City"
                name="city"
                onChange={handleChange}
                value={formData.city}
                required
              />
              <input
                type="text"
                placeholder="State"
                name="state"
                onChange={handleChange}
                value={formData.state}
                required
              />
              <input
                type="text"
                placeholder="Zip Code"
                name="zip"
                onChange={handleChange}
                value={formData.zip}
                required
              />
            </div>
            <textarea
              placeholder="Write Mesage"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <div className="rules">
              <div className="rulesOne">
                <input
                  type="checkbox"
                  name="checkboxOne"
                  onChange={handleChange}
                  value="checked"
                />
                <p>
                  By providing your mobile number and email address, you agree
                  to receive text, calls and email messages from Five Star
                  Estate Liquidations.
                </p>
              </div>
              <div className="rulesTwo">
                <input
                  type="checkbox"
                  name="checkboxTwo"
                  onChange={handleChange}
                  value="checked"
                />
                <p>
                  Your data is safe and secure. We agree to keep all
                  communications private and your info will never be sold nor
                  provided to anyone.
                </p>
              </div>
            </div>
            {/* <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={(value) => setVerified(true)}
            /> */}

            <button className="btn">Submit</button>
          </form>

          <div className="contactInfo">
            <h1>Five Star Estate Liquidations</h1>
            <div className="contactContact">
              <h3>Get In Touch</h3>
              <div className="footer-contact-wrapper">
                <div>
                  <span class="material-symbols-outlined">call</span>
                  <p>423-497-2750</p>
                </div>
                <div>
                  <span class="material-symbols-outlined">mail</span>
                  <p>info@5startLiquidators.com</p>
                </div>
                <div>
                  <span class="material-symbols-outlined">public</span>
                  <a href="http://www.5startLiquidators.com" target="_blank">
                    www.5startLiquidators.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
