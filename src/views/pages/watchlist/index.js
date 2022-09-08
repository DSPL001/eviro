import * as React from 'react';
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import Stack from '@mui/material/Stack';
// assets
import WatchlistInfo from './WatchlistInfo';
import { IconDeviceWatchStats, IconLayoutGridAdd, IconPencil } from '@tabler/icons';
import AddWatchlist from "./addWatchlist";
import { getCollections } from 'slices/watchlist';
// =============================|| TABLER ICONS ||============================= //

const Watchlist = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const [userId] = useState(currentUser.logindata.id);
    const [collections, setCollections] = useState([]);
    const [addWatchlistModal, setAddWatchlistModal] = useState(false);
    const dispatch = useDispatch();
    const [stocks, setStocks] = React.useState('');

    const handleChange = (event) => {
        setStocks(event.target.value);
    };

    const getTiers = useCallback(() => {
        dispatch(getCollections({ userId })).unwrap()
            .then(succ => {
                setCollections(succ);
            })
            .catch(err => {
                console.log(err)
            })
    }, [dispatch, userId]);

    useEffect(() => {
        getTiers();
    }, [getTiers]);
    return (
        <MainCard title="Watchlist" secondary={
            <Stack direction="row" justifyContent="center" alignItems="center" divider={<Divider orientation="vertical" flexItem />} spacing={2} >
                <Box sx={{ minWidth: 100 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Stocks</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={stocks}
                            label="Stocks"
                            onChange={handleChange}
                        >
                            {
                                collections.map((collection) => (
                                    <MenuItem key={collection.id} value={collection.id}><IconDeviceWatchStats/>{collection.watchlistCollectionName}</MenuItem>
                                ))
                            }
                            <MenuItem key='ViewCollection' value='ViewCollection'><IconPencil/>View Collection</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Fab size="small" color="secondary" onClick={() => setAddWatchlistModal(true)} aria-label="Add Watchlist">
                    <IconLayoutGridAdd />
                </Fab>
            </Stack>
        }>
            <AddWatchlist show={addWatchlistModal} close={() => { setAddWatchlistModal(false); }} />
            <WatchlistInfo />
        </MainCard>
    )
};

export default Watchlist;