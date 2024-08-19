import React, { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const ApiUrl = "http://localhost/SmartPark-Backend/Admin/login.php";

  const login = async (email, password) => {
    try {
      const response = await axios.post(ApiUrl, { email, password });

      // Assuming the API returns the authenticated user object
      if (response.data && response.data.success) {
        setUser(response.data.user); // Adjust to match API's user object structure
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
