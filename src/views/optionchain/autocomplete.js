import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={StockData}
      sx={{m: 1, width: 150 }}
      renderInput={(params) => <TextField {...params} label="StockData" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const StockData = [
    //STOCK CONTRACTS
  { label: 'NIFTY',  },
  { label: 'NIFTY BANK',},
  { label: 'FININIFTY', },
  { label: 'BANKNIFTY',  },
  { label: 'MIDCPNIFTY', },
  //STOCK SYMBOL 
  {label: 'AARTIIND'},
  
];
