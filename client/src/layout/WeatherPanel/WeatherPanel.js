import React, { useState } from "react";
import LeftPanel from "../LeftPanel/LeftPanel";
import { SunIcon } from "@heroicons/react/24/outline";
const WeatherPanel = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };
  const displayItem = <p>AAA</p>;
  return (
    <LeftPanel
      togglePanel={togglePanel}
      togglePanels={props.togglePanels}
      open={isOpen}
      panelName={"Weather"}
      icon={<SunIcon className="h-6 w-6" aria-hidden="true" />}
      positionTop={32}
      displayItem={displayItem}
      isAnyOpen={props.isAnyOpen}
    />
  );
};

export default WeatherPanel;
