import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const SnackbarAlert = ({ open, handleClose, message, severity }) => {
    return (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
            {message}
        </Alert>
    </Snackbar>

    );
};

// SnackbarAlert.propTypes = {
//     open: PropTypes.node,
//     handleClose: PropTypes.string,
//     message: PropTypes.string,
//     severity: PropTypes.string
// };

export default SnackbarAlert;

