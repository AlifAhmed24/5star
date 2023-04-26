import React from 'react'
import './previewRow.css'

function PreviewRow() {
    return (
        <table className='previewRowTable'>
            <tr>
                <td>Name</td>
                <td>John Doe</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>johndoe@gmail.com</td>
            </tr>
            <tr>
                <td>Phone</td>
                <td>9132506522</td>
            </tr>
            <tr>
                <td>Address</td>
                <td>Alaska, United State</td>
            </tr>
            <tr>
                <td>City</td>
                <td>Alaska</td>
            </tr>
            <tr>
                <td>State</td>
                <td>Kalifornia</td>
            </tr>
            <tr>
                <td>Zip Code</td>
                <td>A5230</td>
            </tr>
            <tr>
                <td>Terms One</td>
                <td>Checked</td>
            </tr>
            <tr>
                <td>Terms Two</td>
                <td>Unchecked</td>
            </tr>
            <tr>
                <td>Messeage</td>
                <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and</td>
            </tr>
        </table>
    )
}

export default PreviewRow