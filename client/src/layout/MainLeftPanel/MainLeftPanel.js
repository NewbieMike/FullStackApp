import React, { useState } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

import "./MainLeftPanel.scss";

const MainLeftPanel = (props) => {
  const [pickedPanel, setPickedPanel] = useState("EmployeePanel");
  const navigationElements = [
    { name: "Employee", pickedElement: "EmployeePanel" },
    { name: "Weather", pickedElement: "WeatherPanel" },
  ];
  return (
    <div
      className={`left-panel z-50 ${
        props.open ? "left-panel_open" : "left-panel_hide"
      }`}
    >
      <span
        className={`panel-close_button`}
        onClick={() => {
          props.togglePanel(!props.open);
        }}
      >
        <button
          type="button"
          className="rounded-r-lg bg-gray-800 p-1 text-gray-400 hover:text-white"
        >
          {props.open ? (
            <ArrowLeftCircleIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <ArrowRightCircleIcon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </span>
      <header className="leftPanel_header">
        {navigationElements.map((item, index) => (
          <div
            className={`leftPanel_header-item text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
              item.pickedElement === pickedPanel
                ? "leftPanel_header-item_active"
                : ""
            }`}
            key={index}
            onClick={() => setPickedPanel(item.pickedElement)}
          >
            {item.name}
          </div>
        ))}
      </header>
      <div className="leftPanel_mainContent">
        {props.displayItems.map((item, index) =>
          item.type.name === pickedPanel ? <span key={index}>{item}</span> : ""
        )}
      </div>
    </div>
  );
};

export default MainLeftPanel;
