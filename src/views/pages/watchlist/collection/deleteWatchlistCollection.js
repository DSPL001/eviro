import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// material-ui
import { LoadingButton } from '@mui/lab';
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import Box from '@mui/material/Box';
// third party
import { Formik } from 'formik';
import * as Yup from 'yup';
// project imports
import useScriptRef from 'hooks/useScriptRef';
import { enqueueSnackbar as enqueueSnackbarAction } from 'slices/popup';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { deleteCollection } from 'slices/watchlist';
// ==============================|| SAMPLE PAGE ||============================== //

const DeleteWatchlistCollection = ({ show, close, info }) => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const [userId] = useState(currentUser.logindata.id);
    const [watchlistCount] = useState(0);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const scriptedRef = useScriptRef();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
    
    return (
        <Dialog fullScreen={fullScreen} open={show} onClose={close} aria-labelledby="responsive-dialog-title">
            <DialogTitle id="responsive-dialog-title">
                {'Delete Collection?'}
            </DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={{
                        watchlistCollectionName: info.watchlistCollectionName,
                        watchlistCollectionDescription: info.watchlistCollectionDescription,
                        id: info.id,                                               
                        submit: null
                    }}
                    validationSchema={Yup.object().shape({
                        watchlistCollectionName: Yup.string().max(255).required('Title is required'),
                        watchlistCollectionDescription: Yup.string().max(255).required('Description is required')   
                    })}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        const watchlistCollectionName = values.watchlistCollectionName;
                        const watchlistCollectionDescription = values.watchlistCollectionDescription;       
                        const id = values.id;                                        
                        try {
                            setLoading(true);
                            if (scriptedRef.current) {   
                                dispatch(deleteCollection({ id, userId, watchlistCollectionName, watchlistCollectionDescription, watchlistCount }))
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
                            <FormControl fullWidth error={Boolean(touched.watchlistCollectionName && errors.watchlistCollectionName)} sx={{ ...theme.typography.customInput }}>
                                <InputLabel htmlFor="outlined-adornment-watchlistCollectionName-add">Collection Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-watchlistCollectionName-add"
                                    type="text"
                                    value={values.watchlistCollectionName}
                                    name="watchlistCollectionName"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Collection Name"
                                    inputProps={{}}
                                />
                                {touched.watchlistCollectionName && errors.watchlistCollectionName && (
                                    <FormHelperText error id="standard-weight-helper-text-watchlistCollectionName-add">
                                        {errors.watchlistCollectionName}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl fullWidth error={Boolean(touched.watchlistCollectionDescription && errors.watchlistCollectionDescription)} sx={{ ...theme.typography.customInput }}>
                                <InputLabel htmlFor="outlined-adornment-watchlistCollectionDescription-add">Description</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-watchlistCollectionDescription-add"
                                    type="text"
                                    value={values.watchlistCollectionDescription}
                                    name="watchlistCollectionDescription"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Description"
                                    inputProps={{}}
                                />
                                {touched.watchlistCollectionDescription && errors.watchlistCollectionDescription && (
                                    <FormHelperText error id="standard-weight-helper-text-watchlistCollectionDescription-add">
                                        {errors.watchlistCollectionDescription}
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
                                        loadingIndicator="Removing Collection..."
                                        type="submit"
                                        variant="contained"
                                        color="secondary" >
                                        Delete Collection
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
DeleteWatchlistCollection.propTypes = {
    show: PropTypes.bool,
    close: PropTypes.func
}
export default DeleteWatchlistCollection;