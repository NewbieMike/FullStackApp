import React from "react";
import "./LeftPanel.scss";
const LeftPanel = (props) => {
  return (
    <div
      className={`left-panel z-50 ${
        props.open ? "left-panel_open" : "left-panel_hide"
      }`}
    >
      <span
        className={`panel-close_button ${props.open ? "z-10" : "-z-10"}`}
        onClick={() => {
          props.togglePanels({
            panelName: props.panelName,
            panelValue: props.open,
          });
          props.togglePanel(!props.open);
        }}
        style={{ top: props.positionTop }}
      >
        <button
          type="button"
          className="rounded-r-lg bg-gray-800 p-1 text-gray-400 hover:text-white"
        >
          {props.icon}
        </button>
      </span>
      {props.displayItem}
    </div>
  );
};

export default LeftPanel;
