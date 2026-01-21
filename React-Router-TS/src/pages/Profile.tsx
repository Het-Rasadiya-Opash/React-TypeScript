import React from "react";
import { useParams } from "react-router-dom";

type ProfileParams = {
  username: string;
};
const Profile:React.FC = () => {
  const { username } = useParams<ProfileParams>();
  return (
    <>
       <div className="page">
      <h1>Profile</h1>
      <p>Welcome, <strong>{username}</strong></p>
    </div>
    </>
  );
};

export default Profile;
