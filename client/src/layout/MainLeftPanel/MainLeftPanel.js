import React, { useState } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

import "./MainLeftPanel.scss";

const MainLeftPanel = (props) => {
  const [openPanel, setOpenPanel] = useState(false);

  const elementsToRender = [];

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
      {props.displayItem}
    </div>
  );
};

export default MainLeftPanel;
