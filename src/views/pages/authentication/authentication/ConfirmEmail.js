// material-ui
import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { confirmEmail } from 'slices/auth';
import { enqueueSnackbar as enqueueSnackbarAction } from 'slices/popup';
import EviroConfig from 'config-items';
// ==============================|| DEFAULT DASHBOARD ||============================== //
const ConfirmEmail = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const [status, setStatus] = useState('');    
    const addTodo = useCallback((message, status) => {
        const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
        enqueueSnackbar({
            message: message,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: status,
            },
        });
        navigate(EviroConfig.path.authentication.login);
    }, [dispatch, navigate]);

    useEffect(() => {
        const code = searchParams.get("code");
        const userId = searchParams.get("userId");
        dispatch(confirmEmail({ userId, code }))
            .unwrap()
            .then(succ => {
                setStatus(succ.message);
                addTodo(succ.message, 'success')
            })
            .catch(error => {
                console.log(error)
                setStatus(error.error.message);
                addTodo(error.error.message, 'error')
            })
    }, [dispatch, searchParams, addTodo]);
    return (
        <>
            < Container disableGutters maxWidth="md" component="main" >
                <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom >
                    {status}
                </Typography>
            </Container >
        </>
    );
};

export default ConfirmEmail;