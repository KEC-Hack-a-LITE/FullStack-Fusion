// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import LoggedIn from "./pages/LoggedIn.jsx";
import Book from "./pages/Book.jsx";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="loggedin" element={<LoggedIn />} />
        <Route path="book" element={<Book />} />
      </Routes>

      <Footer />
      <ToastContainer />
    </>
  );
}
