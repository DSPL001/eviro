import { useSelector } from "react-redux";
import { useRoutes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import GuestRoutes from './GuestRoutes';

import EviroConfig from 'config-items';
import { logout } from "slices/auth";
import { enqueueSnackbar as enqueueSnackbarAction } from 'slices/popup';


// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {   
    const dispatch = useDispatch();
    const { user: authUser } = useSelector(x => x.auth); 
    const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
    if (authUser){        
        if (authUser.expiration < Date.now()){
            dispatch(logout())
            .then(succ => {
                console.log('logout')
                enqueueSnackbar({
                    message: 'User Logged Out',
                    options: {
                        key: new Date().getTime() + Math.random(),
                        variant: 'info',
                    },
                });                
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
    return useRoutes([MainRoutes, AuthenticationRoutes, GuestRoutes], EviroConfig.app.basename);
}