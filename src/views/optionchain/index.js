// material-ui

import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import StockDataChart from './stockDataChart';

// ==============================|| SAMPLE PAGE ||============================== //

const Optionchain = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <MainCard title="Stock Chart">
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
    )
}

export default Optionchain;
