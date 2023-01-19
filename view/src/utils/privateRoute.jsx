import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/context";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate to='/login' replace />
    }
    return children
}

export default PrivateRoute;