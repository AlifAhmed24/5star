import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './dashboard.css'
import Sidebar from '../../component/adminSidebar/sidebar'
import AdminContact from '../../component/adminContact.jsx/adminContact'
import ContactPreview from '../../component/contactPreview/contactPreview.jsx'


function Dashboard() {
  const [routePath, setRoutePath] = useState('contact')
  const path = useLocation().pathname.split('/')

  useEffect(() => {
    if(path.length === 3){
      if(path[2] === 'contact'){
        setRoutePath("contact");
      }else if(path.length === 4){
        if(path[4] === ''){
          setRoutePath("contact");
        }
      }
    }else if(path.length === 4){
      if(path[3] === ''){
        setRoutePath("contact");
      }else{
        setRoutePath("preview");
      }
      
    }
  },[path])
  return (
    <div className="dashboard">
      <div className="dashboardTop">5starstatelequidations</div>
      <div className="dashboardBody">
        <Sidebar path={routePath} />
        {routePath === "contact" && <AdminContact />}
        {routePath === "preview" && <ContactPreview />}
      </div>
    </div>
  );
}

export default Dashboard