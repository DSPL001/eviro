// material-ui
import * as React from 'react';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import StockDataChart from './stockDataChart';
import { Chip, Stack } from '@mui/material';
import SelectSymbolExpiry from './selectSymbol';


// ==============================|| SAMPLE PAGE ||============================== //

const Optionchain = () => {
    const [isLoading, setLoading] = useState(false);
    const [openSEModal, setOpenSEModal] = useState(false);
 
    return (
        <>
            <MainCard title="StockData" secondary={
                <Stack direction="row" spacing={1}>
                    <Chip label="NIFTY" color="warning" size="small" onClick={() => { setOpenSEModal(true); }} />
                    <Chip label="19/09/2022" color="error" size="small" onClick={() => { setOpenSEModal(true); }} />
                </Stack>
            }>
                
                <SelectSymbolExpiry show={openSEModal} close={() => { setOpenSEModal(false); }} />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                        <Grid item xs={12} sm={6}>
                            <StockDataChart isLoading={isLoading} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <StockDataChart isLoading={isLoading} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <StockDataChart isLoading={isLoading} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <StockDataChart isLoading={isLoading} />
                        </Grid>
                    </Grid>

                </Box>
            </MainCard>
        </>
    )
}

export default Optionchain;
