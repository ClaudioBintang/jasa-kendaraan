import { Link } from "react-router-dom"
const Navbar = () => {
    return (
    <>
    <header className="flex justify-around p-4 text-white bg-teal-700 sm:gap-4 lg:gap-8">
        <div className="">
            <Link to="/">Home</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Vehicle List</Link>
        </div>
        <div className="">
            <ul className="flex gap-4 font-medium">
                <li>Login</li>
                <li>Profil</li>
            </ul>
        </div>
    </header>
    </>
    )
}
export default Navbar