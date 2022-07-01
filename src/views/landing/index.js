// material-ui
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

// project imports
import Home from "./Home";

// ==============================|| DEFAULT DASHBOARD ||============================== //
const Landing = () => {
    return (
        <>
            < Container disableGutters maxWidth="md" component="main" >
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Pricing
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Quickly build an effective pricing table for your potential customers with
                    this layout. It&apos;s built with default MUI components with little
                    customization.
                </Typography>
            </Container >
            <Home />
        </>
    );
};

export default Landing;