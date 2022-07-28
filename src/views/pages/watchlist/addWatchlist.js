import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// material-ui
import { LoadingButton } from '@mui/lab';
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// third party
import { Formik } from 'formik';
import * as Yup from 'yup';
// project imports
import useScriptRef from 'hooks/useScriptRef';
import { enqueueSnackbar as enqueueSnackbarAction } from 'slices/popup';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { addTier } from 'slices/tier';

// ==============================|| SAMPLE PAGE ||============================== //

const AddWatchlist = ({ show, close }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const scriptedRef = useScriptRef();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
    const [age, setAge] = React.useState('');
    const handleSelectChange = (event) => {
        setAge(event.target.value);
      };
    return (
        <Dialog fullScreen={fullScreen} open={show} onClose={close} aria-labelledby="responsive-dialog-title">
            <DialogTitle id="responsive-dialog-title">
                {'Add Stocks to Watchlist?'}
            </DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={{
                        title: '',
                        subheader: '',
                        price: 0,
                        validity: 0,
                        priority: 0,
                        description1: '',
                        description2: '',
                        description3: '',
                        description4: '',
                        description5: '',
                        submit: null
                    }}
                    validationSchema={Yup.object().shape({
                        title: Yup.string().max(255).required('Title is required'),
                        subheader: Yup.string().max(255).required('Subheader is required'),
                        price: Yup.number().min(1).required('Tier Amount is required'),
                        validity: Yup.number().min(1).required('Tier Validity is required'),
                        priority: Yup.number().min(1).required('Tier Priority is required'),
                        description1: Yup.string().max(255).required('Tier Description is required'),
                        description2: Yup.string().max(255).required('Tier Description is required'),
                        description3: Yup.string().max(255).required('Tier Description is required'),
                        description4: Yup.string().max(255).required('Tier Description is required'),
                        description5: Yup.string().max(255).required('Tier Description is required'),
                    })}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        const title = values.title;
                        const subheader = values.subheader;
                        const price = values.price;
                        const validity = values.validity;
                        const priority = values.priority;
                        const description1 = values.description1;
                        const description2 = values.description2;
                        const description3 = values.description3;
                        const description4 = values.description4;
                        const description5 = values.description5;
                        try {
                            setLoading(true);
                            if (scriptedRef.current) {
                                dispatch(addTier({ title, subheader, price, validity, priority, description1, description2, description3, description4, description5 }))
                                    .unwrap()
                                    .then(succ => {
                                        setStatus({ success: true });
                                        setSubmitting(false);
                                        enqueueSnackbar({
                                            message: 'New Tier Added',
                                            options: {
                                                key: new Date().getTime() + Math.random(),
                                                variant: 'success',
                                            },
                                        });
                                        close();
                                        setLoading(false);
                                    })
                                    .catch(error => {
                                        console.log(error)
                                        setStatus({ success: false });
                                        setSubmitting(false);
                                        enqueueSnackbar({
                                            message: 'Error Tier Adding',
                                            options: {
                                                key: new Date().getTime() + Math.random(),
                                                variant: 'error',
                                            },
                                        });
                                        close();
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
                                    message: error.message,
                                    options: {
                                        key: new Date().getTime() + Math.random(),
                                        variant: 'warning',
                                    },
                                });
                                close();
                                setLoading(false);
                            }
                        }
                    }}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleSelectChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <FormControl fullWidth error={Boolean(touched.title && errors.title)} sx={{ ...theme.typography.customInput }}>
                                <InputLabel htmlFor="outlined-adornment-title-add">Tier Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-tier-add"
                                    type="text"
                                    value={values.title}
                                    name="title"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Title"
                                    inputProps={{}}
                                />
                                {touched.title && errors.title && (
                                    <FormHelperText error id="standard-weight-helper-text-title-add">
                                        {errors.title}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl fullWidth error={Boolean(touched.subheader && errors.subheader)} sx={{ ...theme.typography.customInput }}>
                                <InputLabel htmlFor="outlined-adornment-subheader-add">Subheader</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-subheader-add"
                                    type="text"
                                    value={values.subheader}
                                    name="subheader"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Subheader"
                                    inputProps={{}}
                                />
                                {touched.subheader && errors.subheader && (
                                    <FormHelperText error id="standard-weight-helper-text-subheader-add">
                                        {errors.subheader}
                                    </FormHelperText>
                                )}
                            </FormControl>

                            <FormControl fullWidth error={Boolean(touched.price && errors.price)} sx={{ ...theme.typography.customInput }}>
                                <InputLabel htmlFor="outlined-adornment-price-add">Price</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-price-add"
                                    type="number"
                                    value={values.price}
                                    name="price"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Price"
                                    inputProps={{}}
                                />
                                {touched.price && errors.price && (
                                    <FormHelperText error id="standard-weight-helper-text-price-add">
                                        {errors.price}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl fullWidth error={Boolean(touched.validity && errors.validity)} sx={{ ...theme.typography.customInput }}>
                                <InputLabel htmlFor="outlined-adornment-validity-add">Tier Validity</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-validity-add"
                                    type="number"
                                    value={values.validity}
                                    name="validity"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Tier Validity"
                                    inputProps={{}}
                                />
                                {touched.validity && errors.validity && (
                                    <FormHelperText error id="standard-weight-helper-text-validity-add">
                                        {errors.validity}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl fullWidth error={Boolean(touched.priority && errors.priority)} sx={{ ...theme.typography.customInput }}>
                                <InputLabel htmlFor="outlined-adornment-priority-add">Priority</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-priority-add"
                                    type="number"
                                    value={values.priority}
                                    name="priority"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Priority"
                                    inputProps={{}}
                                />
                                {touched.priority && errors.priority && (
                                    <FormHelperText error id="standard-weight-helper-text-priority-add">
                                        {errors.priority}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl fullWidth error={Boolean(touched.description1 && errors.description1)} sx={{ ...theme.typography.customInput }}>
                                <InputLabel htmlFor="outlined-adornment-description1-add">Tier Description1</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-description1-add"
                                    type="text"
                                    value={values.description1}
                                    name="description1"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Description 1"
                                    inputProps={{}}
                                />
                                {touched.description1 && errors.description1 && (
                                    <FormHelperText error id="standard-weight-helper-text-description1-add">
                                        {errors.description1}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl fullWidth error={Boolean(touched.description2 && errors.description2)} sx={{ ...theme.typography.customInput }}>
                                <InputLabel htmlFor="outlined-adornment-description2-add">Tier Description 2</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-description2-add"
                                    type="text"
                                    value={values.description2}
                                    name="description2"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Description 2"
                                    inputProps={{}}
                                />
                                {touched.description2 && errors.description2 && (
                                    <FormHelperText error id="standard-weight-helper-text-description2-add">
                                        {errors.description2}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl fullWidth error={Boolean(touched.description3 && errors.description3)} sx={{ ...theme.typography.customInput }}>
                                <InputLabel htmlFor="outlined-adornment-description3-add">Tier Description 3</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-description3-add"
                                    type="text"
                                    value={values.description3}
                                    name="description3"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Description 3"
                                    inputProps={{}}
                                />
                                {touched.description3 && errors.description3 && (
                                    <FormHelperText error id="standard-weight-helper-text-description3-add">
                                        {errors.description3}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl fullWidth error={Boolean(touched.description4 && errors.description4)} sx={{ ...theme.typography.customInput }}>
                                <InputLabel htmlFor="outlined-adornment-description4-add">Tier Description 4</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-description4-add"
                                    type="text"
                                    value={values.description4}
                                    name="description4"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Description 4"
                                    inputProps={{}}
                                />
                                {touched.description4 && errors.description4 && (
                                    <FormHelperText error id="standard-weight-helper-text-description4-add">
                                        {errors.description4}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl fullWidth error={Boolean(touched.description5 && errors.description5)} sx={{ ...theme.typography.customInput }}>
                                <InputLabel htmlFor="outlined-adornment-description5-add">Tier Description 5</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-description5-add"
                                    type="text"
                                    value={values.description5}
                                    name="description5"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Description 5"
                                    inputProps={{}}
                                />
                                {touched.description5 && errors.description5 && (
                                    <FormHelperText error id="standard-weight-helper-text-description5-add">
                                        {errors.description5}
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
                                        loadingIndicator="Adding Tier..."
                                        type="submit"
                                        variant="contained"
                                        color="secondary" >
                                        Add Tier
                                    </LoadingButton>
                                </AnimateButton>
                            </Box>
                        </form>
                    )}
                </Formik>
            </DialogContent>
        </Dialog>
    )
}
AddWatchlist.propTypes = {
    show: PropTypes.bool,
    close: PropTypes.func
}
export default AddWatchlist;