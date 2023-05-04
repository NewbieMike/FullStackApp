import { useState, useEffect } from "react";
import { UserIcon, SunIcon } from "@heroicons/react/24/outline";
import "./EmployeePanel.scss";
import LeftPanel from "../LeftPanel/LeftPanel";
const EmployeePanel = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/employee/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const displayItem = (
    <ul role="list" className="divide-y divide-gray-100">
      {data.map((person) => (
        <li key={person._id} className="flex justify-between gap-x-6 py-5">
          <a
            href={`${
              window.location.pathname.split("/").includes("employee")
                ? `${person._id}`
                : `api/employee/${person._id}`
            }`}
          >
            <div className="flex gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={person.imageUrl}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person.lastName}
                </p>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <LeftPanel
      togglePanel={props.togglePanel}
      open={props.open}
      icon={<UserIcon className="h-6 w-6" aria-hidden="true" />}
      positionTop={0}
      displayItem={displayItem}
    />
  );
};

export default EmployeePanel;
