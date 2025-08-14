import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./subHeader.css";

function SubHeader() {
  return (
    <div>
      <section className="sub-header">
        <a href="#" className="sub-header-menu link">
          <MenuIcon />
          <h4>All</h4>
        </a>
        <a href="#" className="link">
          <h3>Today's Deals</h3>
        </a>
        <a href="#" className="link">
          <h3>Prime Video</h3>
        </a>
        <a href="#" className="link">
          <h3>Registry</h3>
        </a>
        <a href="#" className="link">
          <h3>Customer Service</h3>
        </a>
        <a href="#" className="link">
          <h3>Gift Cards</h3>
        </a>
        <a href="#" className="link">
          <h3>Sell</h3>
        </a>
      </section>
    </div>
  );
}

export default SubHeader;