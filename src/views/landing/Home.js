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
import { gridSpacing } from 'store/constant';

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
        < Grid container spacing={gridSpacing} alignItems="flex-end" >
            {
                tiers.map((tier) => (
                    // Enterprise card is full width at sm breakpoint
                    <Grid
                        item
                        key={tier.tierName}
                        xs={12}
                        sm={tier.tierName === 'Enterprise' ? 12 : 6}
                        md={4}
                    >
                        <Card variant="outlined">
                            <CardHeader
                                title={tier.tierName}
                                subheader={tier.tierName}
                                titleTypographyProps={{ align: 'center' }}
                                action={tier.tierName === 'Pro' ? <StarIcon /> : null}
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
                                    <Typography component="h2" variant="h3" color="text.primary">
                                        ${tier.amount}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        /mo
                                    </Typography>
                                </Box>
                                <ul>
                                    <Typography
                                        component="li"
                                        variant="subtitle1"
                                        align="center"
                                        key={tier.description}
                                    >
                                        {tier.description}
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