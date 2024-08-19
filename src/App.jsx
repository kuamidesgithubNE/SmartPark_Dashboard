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
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./components/AuthContex";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <UserPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/parking_space"
              element={
                <PrivateRoute>
                  <ParkingSpaces />
                </PrivateRoute>
              }
            />
            <Route
              path="/reservations"
              element={
                <PrivateRoute>
                  <Reservations />
                </PrivateRoute>
              }
            />
            <Route
              path="/reports"
              element={
                <PrivateRoute>
                  <Reports />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
