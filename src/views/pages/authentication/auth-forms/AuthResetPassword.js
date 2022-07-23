// material-ui
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import {
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    OutlinedInput,
    IconButton,
    InputAdornment,
    Typography
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import { resetPassword } from 'slices/auth';
import { enqueueSnackbar as enqueueSnackbarAction } from 'slices/popup';
// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseResetPassword = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const [searchParams] = useSearchParams();
    const code = searchParams.get("code");
    const userId = searchParams.get("userId");
    const [strength, setStrength] = useState(0);
    const [level, setLevel] = useState();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Reset Password</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Formik
                initialValues={{
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    const password = values.password;
                    setLoading(true);
                    try {
                        if (scriptedRef.current) {
                            dispatch(resetPassword({userId, code, password}))
                                .unwrap()
                                .then(succ => {
                                    console.log(succ)
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
                        <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-register"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                label="Password"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    changePassword(e.target.value);
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                inputProps={{}}
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-register">
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {strength !== 0 && (
                            <FormControl fullWidth>
                                <Box sx={{ mb: 2 }}>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <Box
                                                style={{ backgroundColor: level?.color }}
                                                sx={{ width: 85, height: 8, borderRadius: '7px' }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" fontSize="0.75rem">
                                                {level?.label}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </FormControl>
                        )}
                        
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
                                    loadingIndicator="Resetting..."
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Reset Password
                                </LoadingButton>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseResetPassword;
