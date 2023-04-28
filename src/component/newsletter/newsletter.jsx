import React, { useState, useEffect } from "react";
import "./newsletter.css";
import axios from "axios";

function Newsletter() {
  const [newsletter, setNewsletter] = useState([]);
  console.log(newsletter);

  useEffect(() => {
    const fetchNewsletter = async () => {
      const res = await axios.get(
        "http://localhost:8800/api/newsletter/get/all"
      );
      setNewsletter(res.data);
    };
    fetchNewsletter();
  }, []);

  return (
    <div className="adminNewsletter">
      <div className="newsletterTop">
        <span>Newsletter Informations</span>
      </div>
      <div className="adminNewsletterBody">
        <table>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {newsletter.map((newsletter, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{newsletter.name}</td>
                <td>{newsletter.email}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Newsletter;
