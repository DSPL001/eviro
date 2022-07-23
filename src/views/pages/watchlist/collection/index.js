// material-ui
import { Grid } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import EviroConfig from 'config-items';
// ===============================|| UI COLOR ||=============================== //
const WatchlistCollection = () => (
    <MainCard title="Collection - Watchlist" secondary={<SecondaryAction link="https://next.material-ui.com/system/palette/" />}>
        <Grid container spacing={EviroConfig.app.gridSpacing}>
            <Grid item xs={12}>
                <SubCard title="Primary Color">
                    <Grid container spacing={EviroConfig.app.gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <h1>123</h1>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <h1>456</h1>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <h1>678</h1>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <h1>908</h1>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <h1>765</h1>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default WatchlistCollection;
