// material-ui
import * as React from 'react';
import { useState, useEffect, useCallback } from "react";
import { useDispatch } from 'react-redux';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/StarBorder';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import AddTier from './addTier';
import ModifyTier from './modifyTier';
import { getAllTier } from "slices/tier";
import EviroConfig from "config-items";
import DeleteTier from './deleteTier';
// ==============================|| DEFAULT DASHBOARD ||============================== //


const Tierplans = () => {
    const [tiers, setTiers] = useState([]);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openAddModal, setAddOpenModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [infoModal, setInfoModal] = useState({});
    const dispatch = useDispatch();
    const getTiers = useCallback(() => {
        dispatch(getAllTier()).unwrap()
            .then(succ => {
                setTiers(succ);
            })
            .catch(err => {
                console.log(err)
            })
    }, [dispatch]);

    useEffect(() => {
        getTiers();
    }, [getTiers]);

    return (
        <MainCard title="Tier" secondary={
            <Fab size="small" color="secondary" onClick={() => setAddOpenModal(true)} aria-label="Add Tier">
                    <AddShoppingCartIcon />
                </Fab>}>
            <AddTier show={openAddModal} close={() => { setAddOpenModal(false); getTiers(); }} />
            <ModifyTier show={openEditModal} close={() => { setOpenEditModal(false); getTiers(); }} info={infoModal} />
            <DeleteTier show={openDeleteModal} close={() => { setOpenDeleteModal(false); getTiers(); }} info={infoModal} />
            < Grid container spacing={EviroConfig.app.gridSpacing} alignItems="flex-end" >
                {
                    tiers.map((tier) => (
                        <Grid item key={tier.title} xs={12} sm={12} md={4}>

                            <Card variant="outlined">
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
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
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                        <Typography component="h1" variant="h2" color="text.primary">
                                            Rs.{tier.price}/{tier.validity} Days
                                        </Typography>
                                    </Box>
                                    <ul>
                                        <Typography
                                            component="li"
                                            variant="subtitle1"
                                            align="center"
                                            key={tier.description1}
                                        >
                                            {tier.description1}
                                        </Typography>
                                        <Typography
                                            component="li"
                                            variant="subtitle1"
                                            align="center"
                                            key={tier.description2}
                                        >
                                            {tier.description2}
                                        </Typography>
                                        <Typography
                                            component="li"
                                            variant="subtitle1"
                                            align="center"
                                            key={tier.description3}
                                        >
                                            {tier.description3}
                                        </Typography>
                                        <Typography
                                            component="li"
                                            variant="subtitle1"
                                            align="center"
                                            key={tier.description4}
                                        >
                                            {tier.description4}
                                        </Typography>
                                        <Typography
                                            component="li"
                                            variant="subtitle1"
                                            align="center"
                                            key={tier.description5}
                                        >
                                            {tier.description5}
                                        </Typography>
                                    </ul>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="Edit" onClick={() => { setOpenEditModal(true); setInfoModal(tier); }}>
                                        <EditTwoToneIcon color="secondary" />
                                    </IconButton>
                                    <IconButton aria-label="Delete" onClick={() => { setOpenDeleteModal(true); setInfoModal(tier); }}>
                                        <DeleteForeverTwoToneIcon color="error" />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid >

        </MainCard>
    );
};
export default Tierplans;