import React from 'react'
import './dashboard.css'
import Sidebar from '../../component/adminSidebar/sidebar'
import AdminContact from '../../component/adminContact.jsx/adminContact'

function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='dashboardTop'>5starstatelequidations</div>
        <div className='dashboardBody'>
        <Sidebar />
        <AdminContact />
        </div>
    </div>
  )
}

export default Dashboard