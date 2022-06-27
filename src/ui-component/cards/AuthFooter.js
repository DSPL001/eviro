// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://demeter-systems.com" target="_blank" underline="hover">
            Eviro
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://demeter-systems.com" target="_blank" underline="hover">
            &copy; Demeter Systems Private Limited
        </Typography>
    </Stack>
);

export default AuthFooter;
