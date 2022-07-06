import { useState } from 'react';
import { useSelector } from 'react-redux';
// material-ui
import { Avatar, Box, Button, TextField, Grid, Stack } from '@mui/material';
// project imports
import SubCard from 'ui-component/cards/SubCard';

// ==============================|| Profile Page ||============================== //
const MainProfile = () => {
    const { user: authUser } = useSelector(x => x.auth);
    const [firstname] = useState(authUser ? authUser.logindata.firstName : 'FIRST');
    const [lastname] = useState(authUser ? authUser.logindata.lastName : 'LAST');
    const [username] = useState(authUser ? authUser.logindata.username : 'USER');
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <SubCard title='Profile picture'>
                    <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2}>
                        <Avatar
                            alt={firstname + ' ' + lastname}
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 100, height: 100 }}
                        />
                        <Button variant="contained">Upload Photo</Button>
                    </Stack>
                </SubCard>
            </Grid>
            <Grid item xs={12} md={8}>
                <SubCard title="Edit Account Detail">
                    <Box
                        component="form"
                        Validate
                        autoComplete="off"
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="First Name"
                                    defaultValue={firstname}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="Last Name"
                                    defaultValue={lastname}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    required
                                    disabled
                                    id="outlined-required"
                                    label="Username"
                                    defaultValue={username}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    required
                                    disabled
                                    id="outlined-required"
                                    label="Email Address"
                                    defaultValue={username}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Stack direction="row" justifyContent="center" alignItems="center" spacing={12}                    >
                                    <Button variant="contained">Update Details</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </SubCard>
            </Grid>
        </Grid>
    )
};

export default MainProfile;