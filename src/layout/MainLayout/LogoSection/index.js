import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import EviroConfig from 'config-items';
import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //
const redirectpath = () => {
return EviroConfig.user.isAuthenticated? EviroConfig.path.main.dashboard : EviroConfig.path.main.home;
}
const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={redirectpath}>
        <Logo />
    </ButtonBase>
);

export default LogoSection;
