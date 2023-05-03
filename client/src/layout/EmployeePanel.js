import { useState, useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import "./EmployeePanel.scss";
const EmployeePanel = (props) => {
  const [data, setData] = useState([]);
  //   const [open, setOpen] = useState(false);
  useEffect(() => {
    fetch("/api/employee/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div
      className={`employee-panel ${
        props.open ? "employee-panel_open" : "employee-panel_hide"
      }`}
    >
      <span className="panel-close_button" onClick={() => props.togglePanel()}>
        <button
          type="button"
          className="rounded-r-lg bg-gray-800 p-1 text-gray-400 hover:text-white"
        >
          <span className="sr-only">View notifications</span>
          <UserIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </span>
      <ul role="list" className="divide-y divide-gray-100">
        {data.map((person) => (
          <li key={person._id} className="flex justify-between gap-x-6 py-5">
            <a href={`api/employee/${person._id}`}>
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
            {/* <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.role}</p>
              {person.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen{" "}
                  <time dateTime={person.lastSeenDateTime}>
                    {person.lastSeen}
                  </time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeePanel;
