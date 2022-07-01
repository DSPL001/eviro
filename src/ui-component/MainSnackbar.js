import * as React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// ==============================|| SNACKBAR ACTION ||============================== //

const CustomizedSnackbar = ({ message, severity, snackbaropen, snackbarClose}) => {
    return (
        <Snackbar open={snackbaropen} autoHideDuration={2000} onClose={snackbarClose}>
            <Alert onClose={snackbarClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

CustomizedSnackbar.propTypes = {
    snackbarOpen: PropTypes.bool,
    message: PropTypes.string,
    severity: PropTypes.string,
    snackbarClose: PropTypes.node
};

export default CustomizedSnackbar;