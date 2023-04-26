import React from 'react'
import './dashboard.css'
import Sidebar from '../../component/adminSidebar/sidebar'
import AdminContact from '../../component/adminContact.jsx/adminContact'
import ContactPreview from '../../component/contactPreview/contactPreview.jsx'


function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='dashboardTop'>5starstatelequidations</div>
        <div className='dashboardBody'>
        <Sidebar />
        <AdminContact />
        {/* <ContactPreview /> */}
        </div>
    </div>
  )
}

export default Dashboard