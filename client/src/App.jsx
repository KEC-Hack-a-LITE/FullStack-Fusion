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
import EntDocs from "./pages/EntDocs.jsx";
import OrthoDocs from "./pages/OrthoDocs.jsx";
import NeuroDocs from "./pages/NeuroDocs.jsx";
import CardioDocs from "./pages/CardioDocs.jsx";
import VideoComponent from "./pages/VideoComponent.jsx";
import BookingConfirmation from "./pages/BookingConfirmation.jsx";

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
        <Route path="entdocs" element={<EntDocs />} />
        <Route path="orthodocs" element={<OrthoDocs />} />
        <Route path="neurodocs" element={<NeuroDocs />} />
        <Route path="cardiodocs" element={<CardioDocs />} />
        <Route path="videocomponent" element={<VideoComponent />} />
        <Route path="finalBooking" element={<BookingConfirmation />} />
      </Routes>

      <Footer />
      <ToastContainer />
    </>
  );
}
