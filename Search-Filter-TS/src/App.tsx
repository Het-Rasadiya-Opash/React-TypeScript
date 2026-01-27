import React, { useState, useEffect } from "react";
import UserTable from "./UserTable";
import SearchBar from "./SearchBar";

export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const usersData: User[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  age: Math.floor(Math.random() * 33) + 18,
}));

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ageRange, setAgeRange] = useState<string>("ALL");
  const [sortAsc, setSortAsc] = useState<boolean>(true);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(usersData);

  const applyFilters = (
    search: string,
    range: string,
    asc: boolean
  ) => {
    const searchLower = search.toLowerCase();

    let result = usersData.filter((user) => {
      const matchesSearch =
        user.id.toString().includes(searchLower) ||
        user.age.toString().includes(searchLower) ||
        user.name.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower);

      const matchesAge =
        range === "ALL" ||
        (range === "18-25" && user.age >= 18 && user.age <= 25) ||
        (range === "26-30" && user.age >= 26 && user.age <= 30) ||
        (range === "31-50" && user.age >= 31 && user.age <= 50);

      return matchesSearch && matchesAge;
    });

    result.sort((a, b) =>
      asc ? a.age - b.age : b.age - a.age
    );

    setFilteredUsers(result);
  };

  useEffect(() => {
    applyFilters(searchTerm, ageRange, sortAsc);
  }, [searchTerm, ageRange, sortAsc]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        User Table (Search • Filter • Sort)
      </h1>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        ageRange={ageRange}
        onAgeRangeChange={setAgeRange}
      />

      <UserTable
        users={filteredUsers}
        sortAsc={sortAsc}
        onToggleSort={() => setSortAsc((prev) => !prev)}
      />
    </div>
  );
};

export default App;
