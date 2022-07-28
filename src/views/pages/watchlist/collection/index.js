// material-ui
import * as React from 'react';
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import CardContent  from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/StarBorder';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import Fab from '@mui/material/Fab';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { IconLayoutGridAdd } from '@tabler/icons';
import AddWatchlistCollection from './addWatchlistCollection';
import EditWatchlistCollection from './modifyWatchlistCollection';
import DeleteWatchlistCollection from './deleteWatchlistCollection';
import EviroConfig from "config-items";
import { getCollections } from 'slices/watchlist';
// ==============================|| DEFAULT DASHBOARD ||============================== //


const Collections = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const [userId] = useState(currentUser.logindata.id);
    const [collections, setCollections] = useState([]);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openAddModal, setAddOpenModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [infoModal, setInfoModal] = useState({});
    const dispatch = useDispatch();
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
        <MainCard title="Collection - Watchlist" secondary={
            <Fab size="small" color="secondary" onClick={() => setAddOpenModal(true)} aria-label="Add Watchlist">
                <IconLayoutGridAdd />
            </Fab>}>
            <AddWatchlistCollection show={openAddModal} close={() => { setAddOpenModal(false); getTiers(); }} />
            <EditWatchlistCollection show={openEditModal} close={() => { setOpenEditModal(false); getTiers(); }} info={infoModal} />
            <DeleteWatchlistCollection show={openDeleteModal} close={() => { setOpenDeleteModal(false); getTiers(); }} info={infoModal} />
            <Grid container spacing={EviroConfig.app.gridSpacing} alignItems="flex-end" >
                {
                    collections.map((collection) => (
                        <Grid item key={collection.id} xs={12} sm={12} md={3}>
                            <Card variant="outlined">
                                <CardHeader
                                    title={collection.watchlistCollectionName}
                                    subheader={collection.watchlistCollectionDescription}
                                    titleTypographyProps={{ align: 'center' }}
                                    action={collection.watchlistCollectionName === 'Pro' ? <StarIcon /> : null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                                        <Chip label={collection.watchlistCount + ' Stocks'} color="info" />
                                    </Stack>
                                </CardContent>
                                <CardActions>
                                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                                        <IconButton aria-label="Edit" onClick={() => { setOpenEditModal(true); setInfoModal(collection); }}>
                                            <EditTwoToneIcon color="secondary" />
                                        </IconButton>
                                        <IconButton aria-label="Delete" onClick={() => { setOpenDeleteModal(true); setInfoModal(collection); }}>
                                            <DeleteForeverTwoToneIcon color="error" />
                                        </IconButton>
                                    </Stack>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid >

        </MainCard>
    );
};
export default Collections;