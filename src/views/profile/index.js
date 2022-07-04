import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import EviroConfig from "config-items";
import { Paper, Typography, Grid,ButtonBase,Rating, Chip } from "@mui/material";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser)
  const navigate = useNavigate();
  if (!currentUser) {
    navigate(EviroConfig.path.authentication.login);
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
      <strong>Last Name:</strong> {currentUser.lastName}
      </p>
      <p>
        <strong>First Name:</strong> {currentUser.firstName}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default Profile;
