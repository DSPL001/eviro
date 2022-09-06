import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
// project imports
import SubCard from 'ui-component/cards/SubCard';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Button, Grid, Stack, FormControl, FormHelperText, FormControlLabel, InputLabel, OutlinedInput } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { register, updateProfilePicture } from 'slices/auth';
import { clearMessage } from 'slices/message';
import { enqueueSnackbar as enqueueSnackbarAction } from 'slices/popup';
import { MaterialUISwitch } from 'ui-component/ThemeSwitch';
import CountrySelect from './SelectCountry';
// ==============================|| Profile Page ||============================== //
const MainProfile = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const [loading, setLoading] = useState(false);
    const { user: authUser } = useSelector(x => x.auth);
    const [userid] = useState(authUser ? authUser.logindata.id : 'ID');
    const [firstname] = useState(authUser ? authUser.logindata.firstName : 'FIRST');
    const [lastname] = useState(authUser ? authUser.logindata.lastName : 'LAST');
    const [username] = useState(authUser ? authUser.logindata.username : 'USER');
    const [phonenumber] = useState(authUser ? authUser.logindata.phonenumber : 'PHONE')
    const [birthdate] = useState(authUser ? authUser.logindata.birthdate : 'BIRTH')
    const [email] = useState(authUser ? authUser.logindata.email : 'EMAIL');
    const [profilePicture, setProfilePicture] = useState(authUser ? `data:image/*;base64,${authUser.logindata.profilePicture}` : 'PHOTO');
    const dispatch = useDispatch();
    const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
    
    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const Input = styled('input')({
        display: 'none',
    });

    const onImageChange = (e) => {
        const id = userid;
        var file = e.target.files[0];
        var imageType = /image.*/;
        if (!file.type.match(imageType)) return;
        var ProfilePhoto = new FormData();
        ProfilePhoto.append('ProfilePhoto', file);
        setProfilePicture(URL.createObjectURL(file));
        dispatch(updateProfilePicture({ id, ProfilePhoto }))
            .unwrap()
            .then(succ => {
                enqueueSnackbar({
                    message: succ.message,
                    options: {
                        key: new Date().getTime() + Math.random(),
                        variant: succ.status,
                    },
                });
                setLoading(false);
            })
            .catch(error => {
                enqueueSnackbar({
                    message: (error && error.data && error.message) || error.error.message || error.error.title || error.message || error.toString(),
                    options: {
                        key: new Date().getTime() + Math.random(),
                        variant: 'error',
                    },
                });
                setLoading(false);
            })

    };
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <SubCard title='Profile picture' >
                    <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2}>
                        
                    <Avatar
                            alt={firstname + ' ' + lastname}
                            src={profilePicture}
                            sx={{ width: 300, height: 300 }}
                        />
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file"  onChange={onImageChange} />
                            <Button variant="contained" component="span">
                                Upload Profile Picture
                            </Button>
                        </label>
                    </Stack>
                </SubCard>
            </Grid>
            <Grid item xs={12} md={8}>
                <SubCard title="Edit Account Detail" secondary={<FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />} />}>
                    <Box Validate autoComplete="off">
                   
                        <Formik
                            initialValues={{
                                firstname: firstname,
                                lastname: lastname,
                                phonenumber: phonenumber,
                                birthdate: birthdate,
                                username: username,
                                email: email,
                                submit: null,

                            }}
                            validationSchema={Yup.object().shape({
                                firstname: Yup.string().max(120).required('Firstname is required'),
                                lastname: Yup.string().max(120).required('Lastname is required'),
                                phonenumber: Yup.string().max(120).required('Phonenumber is required'),
                                birthdate: Yup.string().max(120).required('Birthdate is required'),
                                username: Yup.string().max(255).required('Username is required'),
                                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                            })}
                            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                                const firstname = values.firstname;
                                const lastname = values.lastname;
                                 const username = values.username;
                                 const phonenumber = values.phonenumber;
                                 const birthdate = values.birthdate;
                                const email = values.email;
                                try {
                                    setLoading(true);
                                    if (scriptedRef.current) {
                                        
                                        dispatch(register({ firstname, lastname, phonenumber, birthdate, username, email }))
                                        
                                            .unwrap()
                                            .then(succ => {
                                                setStatus({ success: true });
                                                setSubmitting(false);
                                                enqueueSnackbar({
                                                    message: succ.message,
                                                    options: {
                                                        key: new Date().getTime() + Math.random(),
                                                        variant: succ.status,
                                                    },
                                                });

                                                setLoading(false);
                                            })
                                            .catch(error => {
                                                setStatus({ success: false });
                                                setSubmitting(false);
                                                enqueueSnackbar({
                                                    message: (error && error.data && error.message) || error.error.message || error.error.title || error.message || error.toString(),
                                                    options: {
                                                        key: new Date().getTime() + Math.random(),
                                                        variant: 'error',
                                                    },
                                                });
                                                setLoading(false);
                                            })
                                    }
                                } catch (error) {
                                    console.error(error);
                                    if (scriptedRef.current) {
                                        setStatus({ success: false });
                                        setErrors({ submit: error.message });
                                        setSubmitting(false);
                                        enqueueSnackbar({
                                            message: (error && error.data && error.message) || error.error.message || error.error.title || error.message || error.toString(),
                                            options: {
                                                key: new Date().getTime() + Math.random(),
                                                variant: 'warning',
                                            },
                                        });

                                        setLoading(false);
                                    }
                                }
                            }}
                        >
                            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                                <form noValidate onSubmit={handleSubmit} {...others}>
                                 
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={Boolean(touched.firstname && errors.firstname)} sx={{ ...theme.typography.customInput }}>
                                                <InputLabel htmlFor="outlined-adornment-firstname-register">Firstname</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-firstname-register"
                                                    type="text"
                                                    value={values.firstname}
                                                    name="firstname"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    inputProps={{}}
                                                />
                                                {touched.firstname && errors.firstname && (
                                                    <FormHelperText error id="standard-weight-helper-text--register">
                                                        {errors.firstname}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={Boolean(touched.lastname && errors.lastname)} sx={{ ...theme.typography.customInput }}>
                                                <InputLabel htmlFor="outlined-adornment-lastname-register">Lastname</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-lastname-register"
                                                    type="text"
                                                    value={values.lastname}
                                                    name="lastname"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    inputProps={{}}
                                                />
                                                {touched.lastname && errors.lastname && (
                                                    <FormHelperText error id="standard-weight-helper-text--register">
                                                        {errors.lastname}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={Boolean(touched.phonenumber && errors.phonenumber)} sx={{ ...theme.typography.customInput }}>
                                                <InputLabel htmlFor="outlined-adornment-phonenumber-register">Phone Number</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-phonenumber-register"
                                                    type="phonenumber"
                                                    value={values.phonenumber}
                                                    name="phonenumber"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    inputProps={{}}
                                                />
                                                {touched.phonenumber && errors.phonenumber && (
                                                    <FormHelperText error id="standard-weight-helper-text--register">
                                                        {errors.phonenumber}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={Boolean(touched.birthdate && errors.birthdate)} sx={{ ...theme.typography.customInput }}>
                                                <InputLabel htmlFor="outlined-adornment-birthdate-register">Birth Date</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-birthdate-register"
                                                    type="date"
                                                    value={values.birthdate}
                                                    name="birthdate"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    inputProps={{}}
                                                />
                                                {touched.birthdate && errors.birthdate && (
                                                    <FormHelperText error id="standard-weight-helper-text--register">
                                                        {errors.birthdate}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={Boolean(touched.gender && errors.gender)} sx={{ ...theme.typography.customInput }}>
                                                <InputLabel htmlFor="outlined-adornment-gender-register">Gender</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-gender-register"
                                                    type="gender"
                                                    value={values.gender}
                                                    name="gender"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    inputProps={{}}
                                                />
                                                {touched.gender && errors.gender && (
                                                    <FormHelperText error id="standard-weight-helper-text--register">
                                                        {errors.gender}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={Boolean(touched.pannumber && errors.pannumber)} sx={{ ...theme.typography.customInput }}>
                                                <InputLabel htmlFor="outlined-adornment-pannumber-register">PAN Number</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-pannumber-register"
                                                    type="text"
                                                    value={values.pannumber}
                                                    name="pannumber"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    inputProps={{}}
                                                />
                                                {touched.pannumber && errors.pannumber && (
                                                    <FormHelperText error id="standard-weight-helper-text--register">
                                                        {errors.pannumber}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={Boolean(touched.address1 && errors.address1)} sx={{ ...theme.typography.customInput }}>
                                                <InputLabel htmlFor="outlined-adornment-address1-register">Address 1</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-address1-register"
                                                    type="address1"
                                                    value={values.address1}
                                                    name="address1"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    inputProps={{}}
                                                />
                                                {touched.address1 && errors.address1 && (
                                                    <FormHelperText error id="standard-weight-helper-text--register">
                                                        {errors.address1}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={Boolean(touched.address2 && errors.address2)} sx={{ ...theme.typography.customInput }}>
                                                <InputLabel htmlFor="outlined-adornment-address2-register">Address 2</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-address2-register"
                                                    type="text"
                                                    value={values.address2}
                                                    name="address2"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    inputProps={{}}
                                                />
                                                {touched.address2 && errors.address2 && (
                                                    <FormHelperText error id="standard-weight-helper-text--register">
                                                        {errors.address2}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <FormControl fullWidth error={Boolean(touched.city && errors.city)} sx={{ ...theme.typography.customInput }}>
                                                <InputLabel htmlFor="outlined-adornment-city-register">City</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-city-register"
                                                    type="city"
                                                    value={values.city}
                                                    name="city"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    inputProps={{}}
                                                />
                                                {touched.city && errors.city && (
                                                    <FormHelperText error id="standard-weight-helper-text-city-register">
                                                        {errors.city}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <FormControl fullWidth error={Boolean(touched.state && errors.state)} sx={{ ...theme.typography.customInput }}>
                                                <InputLabel htmlFor="outlined-adornment-state-register">State</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-state-register"
                                                    type="text"
                                                    value={values.state}
                                                    name="state"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    inputProps={{}}
                                                />
                                                {touched.state && errors.state && (
                                                    <FormHelperText error id="standard-weight-helper-text-state-register">
                                                        {errors.state}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <CountrySelect />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <FormControl fullWidth error={Boolean(touched.pincode && errors.pincode)} sx={{ ...theme.typography.customInput }}>
                                                <InputLabel htmlFor="outlined-adornment-pincode-register">Pincode</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-pincode-register"
                                                    type="text"
                                                    value={values.pincode}
                                                    name="pincode"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    inputProps={{}}
                                                />
                                                {touched.pincode && errors.pincode && (
                                                    <FormHelperText error id="standard-weight-helper-text-pincode-register">
                                                        {errors.pincode}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth disabled error={Boolean(touched.username && errors.username)} sx={{ ...theme.typography.customInput }}>
                                                <InputLabel htmlFor="outlined-adornment-username-register">Username</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-username-register"
                                                    type="text"
                                                    value={values.username}
                                                    name="username"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    inputProps={{}}
                                                />
                                                {touched.username && errors.username && (
                                                    <FormHelperText error id="standard-weight-helper-text--register">
                                                        {errors.username}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <FormControl fullWidth disabled error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                                                <InputLabel htmlFor="outlined-adornment-email-register">Email Address / Username</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-email-register"
                                                    type="email"
                                                    value={values.email}
                                                    name="email"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    inputProps={{}}
                                                />
                                                {touched.email && errors.email && (
                                                    <FormHelperText error id="standard-weight-helper-text--register">
                                                        {errors.email}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Grid>
                                        {errors.submit && (
                                            <Box sx={{ mt: 3 }}>
                                                <FormHelperText error>{errors.submit}</FormHelperText>
                                            </Box>
                                        )}
                                        <Grid item xs={12}>
                                            <Stack direction="row" justifyContent="center" alignItems="center" spacing={12}>
                                                <AnimateButton>
                                                    <LoadingButton
                                                        disableElevation
                                                        disabled={isSubmitting}
                                                        fullWidth
                                                        size="large"
                                                        loading={loading}
                                                        loadingIndicator="Signing Up..."
                                                        type="submit"
                                                        variant="contained"
                                                        color="secondary"
                                                    >
                                                        Update Profile
                                                    </LoadingButton>
                                                </AnimateButton>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </form>
                            )}
                        </Formik>
                    </Box>
                </SubCard>
            </Grid>
        </Grid>
    )
};

export default MainProfile;