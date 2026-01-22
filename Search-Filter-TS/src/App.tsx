import React, { useState } from "react";
import UserTable from "./UserTable";
import SearchBar from "./SearchBar";
export interface User {
  id: number;
  name: string;
  email: string;
}

const usersData: User[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
}));

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Client-side filtering logic
  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Searchable User Table
      </h1>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <UserTable users={filteredUsers} />
    </div>
  );
};

export default App;
