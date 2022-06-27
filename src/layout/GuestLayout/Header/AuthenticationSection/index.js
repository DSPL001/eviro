import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {    
    Box,   
    IconButton
} from '@mui/material';

// assets
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import AppRegistrationTwoToneIcon from '@mui/icons-material/AppRegistrationTwoTone';
import EviroConfig from 'config-items';

// ==============================|| NOTIFICATION ||============================== //

const AuthenticationSection = () => {
    const theme = useTheme();    

    return (
        <>
            <Box
                sx={{
                    ml: 2,
                    mr: 3,
                    [theme.breakpoints.down('md')]: {
                        mr: 2
                    }
                }}
            >
                <IconButton
                    size="large"
                    aria-label="Login"
                    component={Link}
                    to = {EviroConfig.path.authentication.login}
                    color="inherit"
                >
                    <LoginTwoToneIcon />
                </IconButton>
                <IconButton
                    size="large"
                    aria-label="Register"
                    component={Link}
                    to={EviroConfig.path.authentication.register}
                    color="inherit"
                >
                    <AppRegistrationTwoToneIcon />
                </IconButton>
            </Box>
        </>
    );
};

export default AuthenticationSection;
