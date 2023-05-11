import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./contactPreview.css";
import PreviewRow from "../previewRow/previewRow";
import newRequest from './../../utils/newRequest';

function ContactPreview() {
  const [contactPreview, setContactPreview] = useState("");
  const id = useLocation().pathname.split("/")[3];
  useEffect(() => {
    const fetchContactPreview = async () => {
      try {
        const res = await newRequest.get(
          `/api/contact/get/one/${id}`
        );
        setContactPreview(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContactPreview();
  }, []);

  return (
    <div className="contactPreview">
      <div className="contactPreviewTop">
        <span>Contact Preview</span>
        <span>
          Submit Date:{" "}
          {contactPreview[0]?.createdAt
            ? new Date(contactPreview[0]?.createdAt).toLocaleDateString()
            : ""}
        </span>
      </div>
      <div className="contactPreviewBody">
        {contactPreview.length && (
          <PreviewRow
            name={contactPreview[0]?.name}
            email={contactPreview[0]?.email}
            phone={contactPreview[0]?.phone}
            address={contactPreview[0]?.address}
            city={contactPreview[0]?.city}
            state={contactPreview[0]?.state}
            zip={contactPreview[0]?.zip}
            term1={contactPreview[0]?.checkboxOne}
            term2={contactPreview[0]?.checkboxTwo}
            message={contactPreview[0]?.message}
          />
        )}
      </div>
    </div>
  );
}

export default ContactPreview;
