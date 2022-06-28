import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoutes, useNavigate, useLocation } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import GuestRoutes from './GuestRoutes';
import { history } from 'helper/history';
import EviroConfig from 'config-items';
import { logout } from "slices/auth";
import eventBus from "common/EventBus";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    history.navigate = useNavigate();
    history.location = useLocation();

    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        eventBus.on("logout", () => {
            logOut();
        });

        return () => {
            eventBus.remove("logout");
        };
    }, [currentUser, logOut]);

    return useRoutes([MainRoutes, AuthenticationRoutes, GuestRoutes], EviroConfig.app.basename);
}