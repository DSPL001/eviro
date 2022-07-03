import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// material-ui
import { LoadingButton } from '@mui/lab';
import {
    FormControl, FormHelperText,
    InputLabel,
    OutlinedInput
} from '@mui/material';
import Box from '@mui/material/Box';

// third party
import { Formik } from 'formik';
import * as Yup from 'yup';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import { closeModal } from 'slices/modal';
import { enqueueSnackbar as enqueueSnackbarAction } from 'slices/popup';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { addTier } from 'slices/tier';

// ==============================|| SAMPLE PAGE ||============================== //

const AddTier = () => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const scriptedRef = useScriptRef();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));

    return (
        <Dialog fullScreen={fullScreen} open={true} onClose={() => { dispatch(closeModal()); }} aria-labelledby="responsive-dialog-title">
            <DialogTitle id="responsive-dialog-title">
                {"Create Tier?"}
            </DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={{
                        tier: '',
                        tierDescription: '',
                        amount: 0,
                        validity: 0,
                        submit: null
                    }}
                    validationSchema={Yup.object().shape({
                        tier: Yup.string().max(255).required('Tier Name is required'),
                        tierDescription: Yup.string().max(255).required('Tier Description is required'),
                        amount: Yup.number().min(1).required('Tier Amount is required'),
                        validity: Yup.number().min(1).required('Tier Validity is required')
                    })}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        const tierName = values.tier;
                        const description = values.tierDescription;
                        const amount = values.amount;
                        const validity = values.validity;
                        try {
                            setLoading(true);
                            if (scriptedRef.current) {
                                dispatch(addTier({ tierName, description, amount, validity}))
                                    .unwrap()
                                    .then(succ => {
                                        setStatus({ success: true });
                                        setSubmitting(false);
                                        enqueueSnackbar({
                                            message: 'Close Modal',
                                            options: {
                                                key: new Date().getTime() + Math.random(),
                                                variant: 'success',
                                            },
                                        });
                                        dispatch(closeModal())
                                        setLoading(false);
                                    })
                                    .catch(error => {
                                        console.log(error)
                                        setStatus({ success: false });
                                        setSubmitting(false);
                                        enqueueSnackbar({
                                            message: 'Close Modal',
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
                                    message: error.message,
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
                        <form noValidate onSubmit={handleSubmit}>
                            <FormControl fullWidth error={Boolean(touched.tier && errors.tier)} sx={{ ...theme.typography.customInput }}>
                                <InputLabel htmlFor="outlined-adornment-tier-add">Tier Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-tier-add"
                                    type="text"
                                    value={values.tierName}
                                    name="tier"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Tier Name"
                                    inputProps={{}}
                                />
                                {touched.tier && errors.tier && (
                                    <FormHelperText error id="standard-weight-helper-text-tier-add">
                                        {errors.tier}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl fullWidth error={Boolean(touched.tierDescription && errors.tierDescription)} sx={{ ...theme.typography.customInput }}>
                                <InputLabel htmlFor="outlined-adornment-tierdescription-add">Tier Description</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-tierDescription-add"
                                    type="text"
                                    value={values.tierDescription}
                                    name="tierDescription"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Tier Description"
                                    inputProps={{}}
                                />
                                {touched.tierDescription && errors.tierDescription && (
                                    <FormHelperText error id="standard-weight-helper-text-tierDescription-add">
                                        {errors.tier}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl fullWidth error={Boolean(touched.amount && errors.amount)} sx={{ ...theme.typography.customInput }}>
                                <InputLabel htmlFor="outlined-adornment-amount-add">Tier Amount</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount-add"
                                    type="number"
                                    value={values.amount}
                                    name="amount"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Tier Amount"
                                    inputProps={{}}
                                />
                                {touched.amount && errors.amount && (
                                    <FormHelperText error id="standard-weight-helper-text-amount-add">
                                        {errors.tier}
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
                                        {errors.tier}
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

export default AddTier;

