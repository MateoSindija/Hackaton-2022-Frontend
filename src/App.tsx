import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Oragnization/Login";
import Dashboard from "./pages/Oragnization/Layout";
import OrganizeClening from "./pages/Oragnization/OrganizeCleaning";
import Employees from "./pages/Oragnization/Employees";
import EmployeeeRoutes from "./pages/Oragnization/Routes";
import Tickets from "./pages/Oragnization/Tickets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login-organization" element={<Login />} />
        <Route path="/organization-dashboard" element={<Dashboard />} />
        <Route path="/organize-cleaning" element={<OrganizeClening />} />
        <Route path="/organization-employees" element={<Employees />} />
        <Route path="/organization-tickets" element={<Tickets />} />
        <Route path="/organization-routes" element={<EmployeeeRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
