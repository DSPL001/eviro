// material-ui
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { confirmEmail } from 'slices/auth';


// ==============================|| DEFAULT DASHBOARD ||============================== //
const ConfirmEmail = () => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get("code");
    const userId = searchParams.get("userId");
    const dispatch = useDispatch();
    const [status, setStatus] = useState('');

    useEffect(() => {

        dispatch(confirmEmail({ userId, code }))
            .unwrap()
            .then(succ => {

                setStatus(succ.status);

            })
            .catch(error => {
                setStatus(error.status);
            })

    }, [dispatch]);

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