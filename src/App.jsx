import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Dashboard from "./screens/Hompage";
import ParkingSpaces from "./screens/ParkingSpaces";
import UserPage from "./screens/Users";
import Reservations from "./screens/Reservation";
import Reports from "./screens/Report";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="" element={<Dashboard />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/parking_space" element={<ParkingSpaces />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
