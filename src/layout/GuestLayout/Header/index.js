import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// project imports
import LogoSection from 'layout/MainLayout/LogoSection';
import AuthenticationSection from './AuthenticationSection';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const GuestHeader = ({ handleLeftDrawerToggle }) => {
    const theme = useTheme();

    return (
        <>
            {/* logo & toggler button */}
            <Box
                sx={{
                    width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Box component="span" sx={{ display: { xs: 'block', md: 'block' }, flexGrow: 1 }}>
                    <LogoSection />
                </Box>
            </Box>

            {/* header search */}

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />

            {/* notification & profile */}
            <AuthenticationSection />                    
        </>
    );
};

GuestHeader.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default GuestHeader;
