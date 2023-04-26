import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar({ path }) {
  console.log(path);
  return (
    <div className="dashboardSidebar">
      <h3>Admin</h3>
      <Link
        to="/admin/contact"
        className="list list1"
        style={{
          backgroundColor:
            path === "contact" || path === "preview"
              ? "#33343f"
              : "transparent",
        }}
      >
        <span class="material-symbols-outlined">contact_mail</span>
        <span>Contact Informations</span>
      </Link>
      <Link className="list">
        <span class="material-symbols-outlined">feed</span>
        <span>Newsletter Informations</span>
      </Link>
    </div>
  );
}

export default Sidebar;
