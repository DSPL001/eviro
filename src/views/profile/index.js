import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import EviroConfig from 'config-items';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import MainProfile from './MainProfile';

export default function Profile() { 
  const { user: currentUser } = useSelector((state) => state.auth);  
  const navigate = useNavigate();
  if (!currentUser) {
    navigate(EviroConfig.path.authentication.login);
  }
  return (
    <MainCard title="User Profile">
      <MainProfile />
    </MainCard>
  );
}