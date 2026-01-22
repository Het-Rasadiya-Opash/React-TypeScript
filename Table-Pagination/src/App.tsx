import React, { useState } from "react";
import UserTable from "./UserTable";
import Pagination from "./Pagination";
export interface User {
  id: number;
  name: string;
  email: string;
}
const usersData: User[] = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
}));

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // console.log("Current Page:", currentPage);

  const pageSize = 5;
  const totalPages = Math.ceil(usersData.length / pageSize);
  // console.log("Total Pages:", totalPages);

  const startIndex = (currentPage - 1) * pageSize;
  // console.log("Start Index:", startIndex);

  const currentUsers = usersData.slice(startIndex, startIndex + pageSize);
  // console.log(currentUsers);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        User List with Pagination
      </h1>
      <UserTable users={currentUsers} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default App;
