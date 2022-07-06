import { useState } from 'react';
import { useSelector } from 'react-redux';
// material-ui
import { Box, Button, TextField, Grid, Stack } from '@mui/material';
// project imports


// ==============================|| Profile Page ||============================== //
const PersonalData = () => {
    const { user: authUser } = useSelector(x => x.auth);
    const deleteAccount = () => {

    };
    const downloadAccount = () => {

    };
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box component="form" Validate autoComplete="off" >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Current Password"
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="New password"
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                disabled
                                id="outlined-required"
                                label="Confirm Password"
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Stack direction="row" justifyContent="center" alignItems="center" spacing={12}                    >
                                <Button variant="contained" color="error" onClick={deleteAccount}>Delete Account</Button>
                                <Button variant="contained" color="secondary" onClick={downloadAccount}>Download Profile Data</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
};

export default PersonalData;