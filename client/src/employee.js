import React, { useEffect, useState } from "react";

const Employee = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`/api/employee/${window.location.pathname.split("/")[3]}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return <div>employee {data.name}</div>;
};

export default Employee;
