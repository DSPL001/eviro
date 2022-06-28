import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { history } from 'helper/history';
import EviroConfig from 'config-items';

export { PublicRoute };

function PublicRoute({ children }) {
    const { user: authUser } = useSelector(x => x.auth);
    debugger
    if (authUser) {
        // logged in so redirect to login page with the return url
        return <Navigate to={ EviroConfig.path.main.dashboard } state={{ from: history.location }} />
    }

    // authorized so return child components
    return children;
}