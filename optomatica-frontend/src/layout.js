import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import { Button, Container } from "@mui/material";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleAddBookClick = () => {
    navigate("/add-book");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img href={""} src={logo} className="App-logo" alt="logo" />
        <Container style={{ flexDirection: "row", display: "flex" }}>
          <Button variant="filled" onClick={handleHomeClick}>Home</Button>
          <Button variant="filled" onClick={handleAddBookClick}>Add Book</Button>
        </Container>
      </header>
      {children}
    </div>
  );
};

export default Layout;
