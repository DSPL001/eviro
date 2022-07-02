import { useSelector } from "react-redux";
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { history } from 'helper/history';
import EviroConfig from 'config-items';

export { PrivateRoute };

function PrivateRoute({ children }) {
    history.navigate = useNavigate();
    history.location = useLocation();   
    const { user: authUser } = useSelector(x => x.auth);    
    if (!authUser) {
        
        return <Navigate to={ EviroConfig.path.landing.home } state={{ from: history.location }} />
    }
    return children;
}