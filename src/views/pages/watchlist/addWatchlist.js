import PropTypes from 'prop-types';
import { useState } from "react";
import { useSelector } from 'react-redux';
// material-ui
import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// ==============================|| SAMPLE PAGE ||============================== //

const AddWatchlist = ({ show, close }) => {
    const theme = useTheme(); 
    const { stockCodes: currentstockCodes } = useSelector((state) => state.seBasic);
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [collections] = useState(currentstockCodes);
    const [value, setValue] = useState(collections[0].key); 
    const [loading] = useState(false);
    
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