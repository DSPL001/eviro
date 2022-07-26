import * as React from 'react';
import { useState } from "react";
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Fab from '@mui/material/Fab';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Stack from '@mui/material/Stack';
// assets
import WatchlistInfo from './watchlistInfo';
import { IconLayoutGridAdd } from '@tabler/icons';
import AddWatchlist from "./addWatchlist";
// =============================|| TABLER ICONS ||============================= //

const Watchlist = () => {
    const { collection: currentCollection } = useSelector((state) => state.watchlist);
    const [addWatchlistModal, setAddWatchlistModal] = useState(false);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <MainCard title="Watchlist" secondary={
            <Stack direction="row" justifyContent="center" alignItems="center" divider={<Divider orientation="vertical" flexItem />} spacing={2} >
                <Box fullWidth>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            {
                                currentCollection.map((collection) => (
                                    <MenuItem value={collection.id}>{collection.watchlistCollectionName}</MenuItem>
                                ))
                            }                           
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

        </MainCard>)
};

export default Watchlist;