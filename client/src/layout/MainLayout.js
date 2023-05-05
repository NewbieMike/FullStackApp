import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import LeftPanel from "./LeftPanel/LeftPanel";
import EmployeePanel from "./EmployeePanel/EmployeePanel";
import WeatherPanel from "./WeatherPanel/WeatherPanel";
import MainLeftPanel from "./MainLeftPanel/MainLeftPanel";
const Component = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [openPanels, setOpenPanels] = useState({});
  const togglePanel = () => {
    setOpen(!open);
  };
  const togglePanels = (panelData) => {
    setOpenPanels({
      ...openPanels,
      [panelData.panelName]: panelData.panelValue,
    });
  };

  return (
    <div className="">
      <Header />
      {/* <EmployeePanel togglePanels={togglePanels} />
      <WeatherPanel togglePanels={togglePanels} /> */}
      <MainLeftPanel
        togglePanel={togglePanel}
        open={open}
        displayItem={<EmployeePanel />}
      />
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
