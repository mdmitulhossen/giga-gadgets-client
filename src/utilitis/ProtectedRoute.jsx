
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';


const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth() || {};
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location)
    if (loading) {
        return <p>Loading....</p>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={`/signIn`} replace />
};

export default ProtectedRoute; 