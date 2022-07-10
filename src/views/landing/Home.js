// material-ui
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
// project imports
import { getAllTier } from "slices/tier";
import EviroConfig from "config-items";

// ==============================|| DEFAULT DASHBOARD ||============================== //
const Home = () => {
    const [tiers, setTiers] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTier()).unwrap()
            .then(succ => {
                setTiers(succ);
            })
            .catch(err => {
                console.log(err)
            })
    }, [dispatch]);

    return (
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
                        </Card>
                    </Grid>
                ))
            }
        </Grid >
    );
};

export default Home;