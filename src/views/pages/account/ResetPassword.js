// material-ui
import { Box, Button, TextField, Grid, Stack } from '@mui/material';
// project imports


// ==============================|| Profile Page ||============================== //
const ResetPassword = () => {   
    const updatePassword = () => {

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
                                id="outlined-required"
                                label="Confirm Password"
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Stack direction="row" justifyContent="center" alignItems="center" spacing={12}                    >
                                <Button variant="contained" onClick={updatePassword}>Update Password</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
};

export default ResetPassword;