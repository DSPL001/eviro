import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import EviroConfig from 'config-items';
import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (    
    <ButtonBase disableRipple component={Link} to={EviroConfig.path.main.color}>
        <Logo />
    </ButtonBase>
);

export default LogoSection;
