import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import EmployeePanel from "./EmployeePanel";
const Component = ({ children }) => {
  const [open, setOpen] = useState(false);

  const togglePanel = () => {
    setOpen(!open);
  };

  return (
    <div className="">
      <Header />
      <EmployeePanel open={open} togglePanel={togglePanel} />
      <div className={`resizable-panel ${open ? "resizable-panel_short" : ""}`}>
        {children}
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as MainLayout, Component as MainLayoutComponent };
