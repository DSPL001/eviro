import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { history } from 'helper/history';
import EviroConfig from 'config-items';

export { PrivateRoute };

function PrivateRoute({ children }) {
    const { user: authUser } = useSelector(x => x.auth);
    debugger
    if (!authUser) {
        // not logged in so redirect to login page with the return url
        return <Navigate to={ EviroConfig.path.landing.home } state={{ from: history.location }} />
    }

    // authorized so return child components
    return children;
}