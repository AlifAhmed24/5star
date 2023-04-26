import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Row({
  sn,
  name,
  phone,
  email,
  address,
  zip,
  state,
  message,
  id,
  handleContactDelete,
}) {
  const navigate = useNavigate();

  function handleDelete() {
    const deleteContact = async () => {
      const res = await axios.delete(
        `http://localhost:8800/api/contact/delete/one/${id}`
      );
      handleContactDelete(id);
    };
    deleteContact();
  }

  function handleCopy() {
    const copyText = `${name}\n${email}\n${phone}\n${address}\n${state}\n${zip}\n${message}`;
    navigator.clipboard.writeText(copyText);
  }

  function handlePreview() {
    navigate(`/admin/contact/${id}`);
  }

  return (
    <tr>
      <td>{sn}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{address}</td>
      <td className="iconsList">
        <box-icon
          name="copy"
          class="icon"
          type="solid"
          onClick={handleCopy}
        ></box-icon>
        <box-icon
          name="show"
          class="icon"
          type="solid"
          onClick={handlePreview}
        ></box-icon>
        <box-icon
          name="trash-alt"
          class="icon"
          type="solid"
          onClick={handleDelete}
        ></box-icon>
      </td>
    </tr>
  );
}

export default Row;
