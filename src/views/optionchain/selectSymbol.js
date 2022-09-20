import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// material-ui
import { Autocomplete, FormControl, InputLabel, TextField, Select, MenuItem } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import { LoadingButton } from '@mui/lab';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AnimateButton from 'ui-component/extended/AnimateButton';
// Slices
import { expiryDatesbySymbol,getStockdatabyDateandSymbol } from 'slices/se-derivative';
//formik
import { Formik } from 'formik';


// ==============================|| Select Symbol ||============================== //
const SelectSymbolExpiry = ({ show, close }) => {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const { quotemaster: currentquotemaster } = useSelector((state) => state.seDerivative);
    const [expiries, setExpiry] = useState([]);    
    const [stocks, setStocks] = useState(currentquotemaster);
    const [value, setValue] = useState(stocks[0]);
    
    const [Evalue, setEValue] = useState('');
    //get data using usestate
    const [data, setData] = useState([]);
    const dispatch = useDispatch(); 

    const handleChange = (event) => {
        setEValue(event.target.value);
        console.log(event.target.value);  
              
    };
    const getexpirydate = (newValue) => {
        const code = newValue;
        dispatch(expiryDatesbySymbol({ code })).unwrap()
            .then(succ => {
                setExpiry(succ)
            })
            .catch(err => {
                console.log(err);
            })
    };
    const options = stocks.map((option) => {
        const category = option.category;        
        const value = option.value;
        return {
            category, value,
            ...option,
        };
    }); 

    
        const getValue = () => {
            const code =value.value;
           const date = Evalue;

            dispatch(getStockdatabyDateandSymbol({code,date})).unwrap()
                .then(succ => {
                    setData(succ);
                    console.log(succ);
                })
                .catch(err => {
                    console.log(err);
                })
        };
    

    return (
    
        <Formik
            initialValues={{
                quoteData : "",
                getexpirydate:"",
                submit:null
            }}    onSubmit={() => {
              
              }}>
            
        
        <Dialog fullScreen={fullScreen} open={show} onClose={close} aria-labelledby="responsive-dialog-title">
            <DialogTitle id="responsive-dialog-title">
                {'Select Symbol and Expiry Date'}
            </DialogTitle>
            <DialogContent>

            <FormControl>
                <Autocomplete                    
                    id="combo-box-demo"                    
                    options={options.sort((a, b) => a)}
                    key={(option) => option.value}
                    groupBy={(option) => option.category}     
                    getOptionLabel={(option) => option.value}               
                    sx={{ m: 2, minWidth: 300 }}
                    value={value}
                    renderInput={(params) => <TextField {...params} label="Quotes" />}
                    onChange={(event, newValue) => {                        
                        setValue(newValue); 
                        console.log(newValue.value)
                        getexpirydate(newValue.value)
                   
                    }}
                />    
                </FormControl>
                <FormControl sx={{ m: 2, minWidth: 200 }} size="small">
                    <InputLabel id="demo-select-small">Expiry</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"                        
                        label="Expiry"
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
                <Box>
                    <Box sx={{ mt: 2 }}>
                        <AnimateButton>
                            <LoadingButton 
                                disableElevation
                                fullWidth
                                size="large"

                                type="submit"
                                variant="contained"
                                color="secondary" 
                                onClick={getValue}
                                >
                                Ok
                            </LoadingButton>
                         
                        </AnimateButton>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
        </Formik>
        
    )
}
SelectSymbolExpiry.propTypes = {
    show: PropTypes.bool,
    close: PropTypes.func
}
export default SelectSymbolExpiry;