import React from "react";
import { Container, Logo, LogoutButton } from "../index";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  return <div>Header</div>;
}
