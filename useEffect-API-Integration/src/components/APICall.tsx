import React, { useEffect, useState } from "react";
import "./APICall.css";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const APICall: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="status">Loading users...</p>;
  if (error) return <p className="status error">Error: {error}</p>;

  return (
    <div className="container">
      <h2>User List</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <p>
              <span>Email:</span> {user.email}
            </p>
            <p>
              <span>Phone:</span> {user.phone}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default APICall;
