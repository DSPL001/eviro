import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //
const redirectpath = () => {
return config.user.isAuthenticated? config.path.main.dashboard : config.path.main.home;
}
const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={redirectpath}>
        <Logo />
    </ButtonBase>
);

export default LogoSection;
