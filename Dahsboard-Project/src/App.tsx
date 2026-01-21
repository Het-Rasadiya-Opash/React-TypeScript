import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ErrorPage from "./pages/ErrorPage";

const App = () => (
  <Routes>
    <Route path="/" element={<Login />}  errorElement={<ErrorPage />}/> 
    <Route
      path="/user"
      element={
        <ProtectedRoute role="user">
          <UserDashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin"
      element={
        <ProtectedRoute role="admin">
          <AdminDashboard />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default App;
