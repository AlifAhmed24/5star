import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  const path = useLocation().pathname.split("/")[2];
  console.log(path);
  return (
    <div className="dashboardSidebar">
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
  );
}

export default Sidebar;
