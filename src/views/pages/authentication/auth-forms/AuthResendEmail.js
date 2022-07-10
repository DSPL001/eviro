// material-ui
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import {
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    OutlinedInput,
    Typography
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { resendEmail } from 'slices/auth';
import { enqueueSnackbar as enqueueSnackbarAction } from 'slices/popup';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseResendEmail = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Resend Email Confirmation</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Formik
                initialValues={{
                    email: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    const email = values.email
                    setLoading(true);
                    try {
                        if (scriptedRef.current) {
                            dispatch(resendEmail({email}))
                                .unwrap()
                                .then(succ => {
                                    setStatus({ success: true });
                                    setSubmitting(false);
                                    enqueueSnackbar({
                                        message: succ.message,
                                        options: {
                                            key: new Date().getTime() + Math.random(),
                                            variant: 'success',
                                        },
                                    });
                                    setLoading(false);                                    
                                })
                                .catch(error => {
                                    console.log(error)
                                    setStatus({ success: false });
                                    setSubmitting(false);
                                    enqueueSnackbar({
                                        message: error.error.message,
                                        options: {
                                            key: new Date().getTime() + Math.random(),
                                            variant: 'warning',
                                        },
                                    });
                                    setLoading(false);
                                })
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                            setLoading(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-login"
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Email Address / Username"
                                inputProps={{}}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </FormControl>
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <LoadingButton
                                    disableElevation
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    loading={loading}
                                    loadingIndicator="Signing In..."
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Send Email
                                </LoadingButton>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseResendEmail;
