import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState({ success: "", error: "" });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const { data } = await axios.post("https://reqres.in/api/login", credentials);
            localStorage.setItem("access_Token", data.accessToken);
            localStorage.setItem("refresh_Token", data.refreshToken);
            setMessage({ success: "Redirecting...", error: "" });
            setTimeout(() => navigate("/"), 2000);
        } catch (error) {
            const errorMsg = error.response?.data?.error || "An unexpected error occurred";
            setMessage({ success: "", error: errorMsg });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <header className="flex items-center justify-center h-screen m-0 bg-slate-200">
                <div className="p-10 text-center text-gray-800 bg-white rounded-lg shadow-gray-500 max-w-96">
                    <h2 className="mb-5 text-2xl font-semibold">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4 text-left">
                            <label htmlFor="email" className="block mb-1 text-lg">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Input Email"
                                onChange={handleChange}
                                className="w-full p-2 text-sm border-2 border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none"
                            />
                        </div>
                        <div className="mb-4 text-left">
                            <label htmlFor="password" className="block mb-1 text-lg">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                className="w-full p-2 text-sm border-2 border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full p-3 text-xl text-white transition-colors bg-teal-700 rounded-md hover:bg-teal-800"
                            >
                                {isLoading ? "Loading..." : "Login"}
                            </button>
                        </div>
                    </form>
                    <p className="mt-4">
                        Don't have an account? <Link to="/register">Sign Up</Link>
                    </p>
                    {message.success && <p className="text-green-600">{message.success}</p>}
                    {message.error && <p className="text-red-700">{message.error}</p>}
                </div>
            </header>
        </>
    );
};

export default Login;

