import { useState, useEffect } from "react";
import "./EmployeePanel.scss";
const EmployeePanel = (props) => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    fetch("/api/employee/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
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
};

export default EmployeePanel;
