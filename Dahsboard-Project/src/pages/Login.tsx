import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type Role = "user" | "admin";

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role: Role) => {
    login(role);
    navigate(`/${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-white">
          Login
        </h2>

        <button
          onClick={() => handleLogin("user")}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Login as User
        </button>

        <button
          onClick={() => handleLogin("admin")}
          className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
};

export default Login;
