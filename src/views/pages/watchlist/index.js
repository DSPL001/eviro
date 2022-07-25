import { useState, useEffect, useCallback } from "react";
import { Card } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import IconButton from '@mui/material/IconButton';
// assets
import WatchlistInfo from './watchlistInfo';
import { IconLayoutGridAdd } from '@tabler/icons';
import AddWatchlist from "./addWatchlist";
// =============================|| TABLER ICONS ||============================= //

const Watchlist = () => {
    const [addWatchlistModal, setAddWatchlistModal] = useState(false);
    return (
        <MainCard title="Watchlist" secondary={
            <IconButton color="primary" onClick={() => setAddWatchlistModal(true)} aria-label="Add Watchlist">
                <IconLayoutGridAdd />
            </IconButton>}>
            <AddWatchlist show={addWatchlistModal} close={() => { setAddWatchlistModal(false); }} />
            <WatchlistInfo />

        </MainCard>)
};

export default Watchlist;