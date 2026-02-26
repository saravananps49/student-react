import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";
import { StudentProvider } from "./context/StudentContext";
import "./App.css";

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <nav className="navbar">
          <Link to="/">Student List</Link>
          <Link to="/favourites">Favourite Students</Link>
        </nav>

        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/favourites" element={<FavouriteStudents />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;