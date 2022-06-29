import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import EviroConfig from 'config-items';
import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (    
    <ButtonBase disableRipple component={Link} to={EviroConfig.path.defaultPath}>
        <Logo />
    </ButtonBase>
);

export default LogoSection;
