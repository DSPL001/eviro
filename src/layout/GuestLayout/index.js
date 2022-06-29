// export default GuestLayout;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { AppBar, useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
// project imports
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import Header from './Header';
import Customization from '../Customization';
import navigation from 'menu-items';
import { SET_MENU } from 'slices/actions';
import GlobalStyles from '@mui/material/GlobalStyles';
import GuestFooter from './Footer';
// assets
import { IconChevronRight } from '@tabler/icons';

// ==============================|| MAIN LAYOUT ||============================== //


function LandingContent() {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));

    // Handle left drawer
    const leftDrawerOpened = useSelector((state) => state.customization.opened);
    const dispatch = useDispatch();
    const handleLeftDrawerToggle = () => {
        dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
    };

    useEffect(() => {
        dispatch({ type: SET_MENU, opened: !matchDownMd });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownMd]);
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </Toolbar>
            </AppBar>

            {/* main content */}
            <Container theme={theme} disableGutters maxWidth="lg" component="main" sx={{ pt: 8, pb: 6, }}>
                {/* breadcrumb */}
                <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
                <Outlet />
            </Container>
            <GuestFooter />
            <Customization />
        </React.Fragment>
    );
}

export default function GuestLayout() {
    return <LandingContent />;
}
