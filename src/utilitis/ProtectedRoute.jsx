
import Spinner from '../components/Spinner';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';


const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth() || {};
    const location = useLocation();

    console.log(location)
    if (loading) {
        return <Spinner/>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={`/signIn`} replace />
};

export default ProtectedRoute; 