import { Navigate, Outlet } from "react-router-dom"
const ProtectedPages = () => {
    const token = localStorage.getItem('access_Token');
    if (!token && token === null) {
        return <Navigate to="/Login" />
    }
    return <>{children || <Outlet />}</>
   
}
export default ProtectedPages