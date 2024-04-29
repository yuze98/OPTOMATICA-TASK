// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import AddBookForm from "./Views/AddBookForm";
import MainPage from "./Views/MainPage";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/add-book" element={<AddBookForm />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
