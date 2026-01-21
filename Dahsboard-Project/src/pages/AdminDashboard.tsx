import Navbar from "../components/Navbar";
import { useState } from "react";

const AdminDashboard = () => {
  const [users, setUsers] = useState(["user1", "user2", "user3"]);

  return (
    <>
      <Navbar />
      <div className="p-6">
        {users.map((user, i) => (
          <div key={i} className="flex justify-between mb-2">
            <span>{user}</span>
            <div>
              <button
                onClick={() => setUsers(users.filter((_, x) => x !== i))}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminDashboard;
