import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EviroConfig from 'config-items';
import WatchlistProfitCard from './WatchlistProfitCard';
import WatchlistLossCard from './WatchlistLossCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

export default function WatchlistInfo() {
  const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
  return (
    <Grid container spacing={EviroConfig.app.gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={EviroConfig.app.gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <WatchlistProfitCard isLoading={isLoading} StockName = 'Reliance' Price = {558765}/>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <WatchlistProfitCard isLoading={isLoading} StockName = 'Infosys' Price = {5678}/>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <WatchlistProfitCard isLoading={isLoading} StockName = 'asdggg' Price = {45632}/>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <WatchlistLossCard isLoading={isLoading} StockName = 'wegwt' Price = {23462}/>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <WatchlistProfitCard isLoading={isLoading} StockName = 'uytre' Price = {5098760.005}/>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <WatchlistLossCard isLoading={isLoading} StockName = 'poiu' Price = {6655}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}