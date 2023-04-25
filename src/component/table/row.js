import React from 'react'
import axios from 'axios'

function Row({sn, name, phone, email, address, zip, state, message ,id, handleContactDelete}) {
    function handleDelete(){
        const deleteContact = async () => {
          const res = axios.delete(`http://localhost:8800/api/contact/delete/one/${id}`)
          handleContactDelete(id)
        }
        deleteContact()
    }
    function handleCopy(){
        const copyText = `${name}\n${email}\n${phone}\n${address}\n${state}\n${zip}\n${message}`;
        navigator.clipboard.writeText(copyText)
    }
    return (
        <tr>
            <td>{sn}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td className='iconsList'>
                <box-icon name='copy' class='icon' type='solid' onClick={handleCopy}></box-icon>
                <box-icon name='show' class='icon' type='solid'></box-icon>
                <box-icon  name='trash-alt' class='icon' type='solid' onClick={handleDelete} ></box-icon>
            </td>
        </tr>
    )
}

export default Row