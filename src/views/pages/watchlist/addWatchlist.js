import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// material-ui
import { LoadingButton } from '@mui/lab';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import { FormControl, FormHelperText, InputLabel, OutlinedInput, ListSubheader } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
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
import { stockCodes } from 'slices/seBasic';

// ==============================|| SAMPLE PAGE ||============================== //

const AddWatchlist = ({ show, close }) => {
    const theme = useTheme(); 
    const { stockCodes: currentstockCodes } = useSelector((state) => state.seBasic);
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [collections, setCollections] = useState(currentstockCodes.nseLists);
    const [value, setValue] = useState(collections[0].key); 
    const scriptedRef = useScriptRef();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
    const [age, setAge] = React.useState('');
    const handleSelectChange = (event) => {
        setAge(event.target.value);
    };
    
    function handleClick() {
        setLoading(true);
    }
    const getStocks = useCallback(() => {
        dispatch(stockCodes()).unwrap()
            .then(succ => {
                setCollections(succ.nseLists);
            })
            .catch(err => {
                console.log(err)
            })
    }, [dispatch]);
    const options = collections.map((option) => {
        const category = option.category;
        const key = option.key;
        return {
            category, key,
            ...option,
        };
    });    
    return (
        <Dialog fullScreen={fullScreen} open={show} onClose={close} aria-labelledby="responsive-dialog-title">
            <DialogTitle id="responsive-dialog-title">
                {'Add Stocks to Watchlist?'}
            </DialogTitle>
            <DialogContent>
                <Autocomplete
                    id="grouped-demo"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    options={options.sort((a, b) => a)}
                    key={(option) => option.key}
                    groupBy={(option) => option.category}
                    getOptionLabel={(option) => option.key}
                    sx={{ mt: 1, minWidth: 300 }}
                    renderInput={(params) => <TextField {...params} label="Stocks" />}
                />
                <Box>
                    <Box sx={{ mt: 2 }}>
                        <AnimateButton>
                            <LoadingButton
                                disableElevation
                                fullWidth
                                size="large"
                                loading={loading}
                                loadingIndicator="Adding Collection..."
                                type="submit"
                                variant="contained"
                                color="secondary" >
                                Add Collection
                            </LoadingButton>
                        </AnimateButton>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}
AddWatchlist.propTypes = {
    show: PropTypes.bool,
    close: PropTypes.func
}
export default AddWatchlist;