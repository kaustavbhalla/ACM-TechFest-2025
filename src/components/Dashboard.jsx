import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Dashboard = () => {
  const user = useAuth();

  if (!user) return <p>Please login</p>
  const navigate = useNavigate();

  const logOut = async() => {
    await signOut(auth);
    navigate("/");
  }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard