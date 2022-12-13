// material-ui
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import StockDataChart from './stockDataChart';
import { Stack } from '@mui/material';
import SelectSymbolExpiry from './selectSymbol';
import Fab from '@mui/material/Fab';
import { IconLayoutGridAdd } from '@tabler/icons';

// ==============================|| SAMPLE PAGE ||============================== //

const Optionchain = () => {
    const [isLoading, setLoading] = useState(false);
    const [openSEModal, setOpenSEModal] = useState(false);

    return (
        <>
            <MainCard title="StockData" secondary={
                <Stack direction="row" spacing={1}>
                    <Fab size="small" color="secondary" onClick={() => setOpenSEModal(true)} aria-label="SelectSymbolExpiry">
                        <IconLayoutGridAdd />
                    </Fab>
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
