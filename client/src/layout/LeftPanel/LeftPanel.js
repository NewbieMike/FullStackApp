import React from "react";
import "./LeftPanel.scss";
const LeftPanel = (props) => {
  return (
    <div
      className={`left-panel ${
        props.open ? "left-panel_open" : "left-panel_hide"
      }`}
    >
      <span
        className="panel-close_button"
        onClick={() => props.togglePanel()}
        style={{ top: props.positionTop }}
      >
        <button
          type="button"
          className="rounded-r-lg bg-gray-800 p-1 text-gray-400 hover:text-white"
        >
          {props.icon}
          {/* <UserIcon className="h-6 w-6" aria-hidden="true" /> */}
        </button>
      </span>
      {props.displayItem}
    </div>
  );
};

export default LeftPanel;
