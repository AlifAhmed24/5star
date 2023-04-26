import React from 'react'
import './previewRow.css'

function PreviewRow({name, email, phone, address, city, state, zip, term1, term2, message}) {
    return (
      <table className="previewRowTable">
        <tr>
          <td>Name</td>
          <td>{name}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{email}</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>{phone}</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>{address}</td>
        </tr>
        <tr>
          <td>City</td>
          <td>{city}</td>
        </tr>
        <tr>
          <td>State</td>
          <td>{state}</td>
        </tr>
        <tr>
          <td>Zip Code</td>
          <td>{zip}</td>
        </tr>
        <tr>
          <td>Terms One</td>
          <td>{term1}</td>
        </tr>
        <tr>
          <td>Terms Two</td>
          <td>{term2}</td>
        </tr>
        <tr>
          <td>Messeage</td>
          <td>{message}</td>
        </tr>
      </table>
    );
}

export default PreviewRow