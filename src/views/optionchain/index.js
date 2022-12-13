// material-ui
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { Stack } from '@mui/material';
import SelectSymbolExpiry from './selectSymbol';
import Fab from '@mui/material/Fab';
import { IconLayoutGridAdd } from '@tabler/icons';
//Bar_Chart
import CEchange_inopen_interest from './Barchart/CEchange_inopen_interest';
import CE_open_interest from './Barchart/CE_open_interest';
import PE_change_inopen_interest from './Barchart/PE_change_inopen_interest';
import PE_open_interest from './Barchart/PE_open_interest';



//symbol
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import AnalyticsIcon from '@mui/icons-material/Analytics';


import OptionData_Table from './OptionChain_Table/OptionData_Table';
import ChangeinOpeninterest from './combine_BarChart/ChangeinOpeninterest';
import Openinterest from './combine_BarChart/Openinterest';


// ==============================|| SAMPLE PAGE ||============================== //

const Optionchain = () => {
    const [isLoading, setLoading] = useState(true);
    const [openSEModal, setOpenSEModal] = useState(false);

    return (
        <>
            <MainCard title="StockData" secondary={
                <>
                    <Stack direction="row" spacing={1}>
                        <Fab size="small" color="secondary" onClick={() => setLoading(!isLoading)} aria-label="Combine_BarChart" >
                            {isLoading === true ? <DensitySmallIcon /> : <DragHandleIcon />}
                        </Fab>
                        <Fab size="small" color="secondary" onClick={() => setOpenSEModal(true)} aria-label="SelectSymbolExpiry">
                            <IconLayoutGridAdd />
                        </Fab>
                     
                    </Stack>
                </>

            }>

                <SelectSymbolExpiry show={openSEModal} close={() => { setOpenSEModal(false); }} />



                <Box sx={{ flexGrow: 1 }}>
                    {/* show and hide Barchart's */}
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {
                            isLoading === true ?
                                <>
                                
                                    <Grid item xs={12} sm={6}>
                                        <CEchange_inopen_interest />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <CE_open_interest />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <PE_change_inopen_interest />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <PE_open_interest />
                                    </Grid>

                                    {/* <Grid >
                                    <Grid><ChangeinOpeninterest /></Grid>
                                    <Grid> <Openinterest /></Grid>
                                </Grid> */}
                                </> : <>
                                    <Grid item xs={12} sm={12} >
                                       <OptionData_Table/>

                                    </Grid>

                                </>
                        }
                    </Grid>



                </Box>
            </MainCard>
        </>
    )
}

export default Optionchain;
