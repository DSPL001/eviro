import PropTypes from 'prop-types';
import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// material-ui
import { Autocomplete, FormControl, InputLabel, TextField, Select, MenuItem } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// Slices
import { expiryDatesbySymbol } from 'slices/se-derivative';

// ==============================|| Select Symbol ||============================== //
const SelectSymbolExpiry = ({ show, close }) => {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const { quotemaster: currentquotemaster } = useSelector((state) => state.seDerivative);  
    const [age, setAge] = useState('');
    const [expiries, setExpiry] = useState([]);
    const [stocks] = useState(currentquotemaster);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        console.log(event.target.value);
        setAge(event.target.value);
    };
    const getexpirydate = (event, value) => {
        const code = value;
        dispatch(expiryDatesbySymbol({ code })).unwrap()
            .then(succ => {
                setExpiry(succ)
            })
            .catch(err => {
                console.log(err);
            })
    };    
    return (
        <Dialog fullScreen={fullScreen} open={show} onClose={close} aria-labelledby="responsive-dialog-title">
            <DialogTitle id="responsive-dialog-title">
                {'Select Symbol and Expiry Date'}
            </DialogTitle>
            <DialogContent>

                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={stocks.map((option) => option.value)}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Quotes" />}
                    onChange={getexpirydate}
                />
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Age</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="" key='None'>
                            <em>None</em>
                        </MenuItem>
                        {
                            expiries.map((expiry) => (
                                <MenuItem key={expiry} value={expiry}>{expiry}</MenuItem>
                            ))
                        }                       
                    </Select>
                </FormControl>
            </DialogContent>
           
        </Dialog>
        
    )
}
SelectSymbolExpiry.propTypes = {
    show: PropTypes.bool,
    close: PropTypes.func
}
export default SelectSymbolExpiry;