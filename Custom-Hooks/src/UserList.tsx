import useFetch from "./useFetch";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");

  if (isLoading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!users) {
    return <p>No users found.</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
};

export default UserList;
