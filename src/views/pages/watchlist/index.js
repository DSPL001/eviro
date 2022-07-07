import { Card } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// assets
import LinkIcon from '@mui/icons-material/Link';

// =============================|| TABLER ICONS ||============================= //

const Watchlist = () => (
    <MainCard title="Watchlist" secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://tablericons.com/" />}>
        <Card sx={{ overflow: 'hidden' }}>
            <h1>qwerty</h1>
        </Card>
    </MainCard>
);

export default Watchlist;