import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const token = localStorage.getItem('access_Token');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        setTimeout(() => {
            navigate('/Login');
        });
    };

    return (
        <>
            <header className="flex justify-between p-4 text-gray-700 bg-white shadow-lg sm:gap-4 lg:gap-8">
                <div className="flex items-center gap-4 font-medium">
                    <h4 className="w-32 text-2xl font-semibold text-teal-600">ELECTRIFY</h4>
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/Detail">How it Works</Link>
                    <Link to="/Detail">Vehicle</Link>
                </div>
                <div className="flex items-center gap-4 text-center">
                    {token ? (
                        <button className="px-3 py-1 text-white bg-teal-600 rounded-lg" onClick={handleLogout}>Logout</button>
                    ) : (
                        <Link to="/Login" className="px-3 py-1 text-white bg-teal-600 rounded-lg">Login</Link>
                    )}
                    <Link to="/Profil" className="font-medium">Profil</Link>
                </div>
            </header>
        </>
    );
};

export default Navbar;
