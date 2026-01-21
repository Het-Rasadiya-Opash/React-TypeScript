import Navbar from "../components/Navbar";
import { useState } from "react";

const UserDashboard = () => {
  const [items, setItems] = useState(["Profile", "Orders"]);

  const deleteItem = (i: number) =>
    setItems(items.filter((_, index) => index !== i));

  return (
    <>
      <Navbar />
      <div className="p-6">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between mb-2">
            <span>{item}</span>
            <button onClick={() => deleteItem(i)} className="text-red-500">Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserDashboard;
