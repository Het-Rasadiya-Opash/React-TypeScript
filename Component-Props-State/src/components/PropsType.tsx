import React from "react";

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

const PropsType: React.FC<User> = ({ name, age, isAdmin }) => {
  return (
    <>
      <div>
        <h3>Name: {name}</h3>
        <p>Age: {age}</p>
        {isAdmin && <strong>Admin User</strong>}
      </div>
    </>
  );
};

export default PropsType;
