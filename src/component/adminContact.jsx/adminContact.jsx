import React, { useState, useEffect } from "react";
import "./adminContact.css";
import Row from "../table/row";
import newRequest from "../../utils/newRequest";

function AdminContact() {
  const [contactInfo, setContactInfo] = useState([]);
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await newRequest.get("/api/contact/get/all");
        setContactInfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContact();
  }, []);

  const handleContactDelete = (id) => {
    setContactInfo(contactInfo.filter((contact) => contact._id !== id));
  };

  return (
    <div className="adminContact">
      <div className="adminContactHeading">
        <span>Contact Information</span>
        <span>Total: {contactInfo.length}</span>
      </div>
      <div className="adminContactBody">
        <table>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>

          {contactInfo?.map((value, index) => {
            return (
              <Row
                key={index}
                id={value._id}
                sn={index + 1}
                name={value.name}
                email={value.email}
                phone={value.phone}
                address={value.address}
                zip={value.zip}
                state={value.state}
                message={value.message}
                handleContactDelete={handleContactDelete}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default AdminContact;
