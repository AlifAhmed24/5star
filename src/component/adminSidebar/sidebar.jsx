import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const path = useLocation().pathname.split("/")[2];

  function menuOpen() {
    const open = document.querySelector('.dashboardSidebar')
    open.style.display = 'block'
  }
  function menuClose() {
    const close = document.querySelector('.dashboardSidebar')
    close.style.display = 'none'
  }

  return (
    <div className="sidebardWrapper">
      <span class="material-symbols-outlined" onClick={menuOpen}>
        menu
      </span>

      <div className="dashboardSidebar">
        <span class="material-symbols-outlined" onClick={menuClose}>
          close
        </span>
        <h3>Admin</h3>
        <Link
          to="/admin/contact"
          className="list list1"
          style={{
            backgroundColor: path === "contact" ? "#33343f" : "transparent",
          }}
        >
          <span class="material-symbols-outlined">contact_mail</span>
          <span>Contact Informations</span>
        </Link>
        <Link
          to="/admin/newsletter"
          className="list"
          style={{
            backgroundColor: path === "newsletter" ? "#33343f" : "transparent",
          }}
        >
          <span class="material-symbols-outlined">feed</span>
          <span>Newsletter Informations</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
