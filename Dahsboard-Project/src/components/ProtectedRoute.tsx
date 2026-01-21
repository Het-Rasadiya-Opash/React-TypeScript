import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute= ({ role, children }: any) => {
  const auth = useAuth();
  if (auth.role !== role) return <Navigate to="/" />;
  return children;
};

export default ProtectedRoute;
