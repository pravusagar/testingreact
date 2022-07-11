import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "../Components/PrivateRoute";
import Dashboard from "./Dashboard";

function AllRoutes() {
  return (
    // <div>
    //   {/* Routes */}
    //   {/* Home */}
    //   {/* Login */}
    //   {/* Private Route: Dashboard */}
    // </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route
        path="/Dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
