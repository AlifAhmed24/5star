import React from 'react'
import './sidebar.css'

function Sidebar() {
  return (
    <div className='dashboardSidebar'>
      <h3>Admin</h3>
      <div className='list list1'>
        <span class="material-symbols-outlined">
          contact_mail
        </span>
        <span>Contact Informations</span>
      </div>
      <div className='list'>
        <span class="material-symbols-outlined">
          feed
        </span>
        <span>Newsletter Informations</span>
      </div>
    </div>
  )
}

export default Sidebar