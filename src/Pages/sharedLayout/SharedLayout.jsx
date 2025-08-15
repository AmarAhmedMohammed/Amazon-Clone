import React from "react";
import "./sharedLayout.css";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/Sub_header/SubHeader";

function SharedLayout() {
  return (
    <div>
      <div className="header_position">
        <Header />
        <SubHeader />
      </div>
      <Outlet />
    </div>
  );
}

export default SharedLayout;
