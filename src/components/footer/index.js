import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';
import * as FooterConstant from '../../constants/Footer';

export function Footer() {
    return (        
        < Container
            maxWidth="sm"
            component="footer"
            sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 8,
                py: [3, 6],
            }
            }
        >
            <Grid container spacing={4} justifyContent="space-evenly">
                {FooterConstant.footers.map((footer) => (
                    <Grid item xs={6} sm={3} key={footer.title}>
                        <Typography variant="body1" color="text.primary" gutterBottom>
                            {footer.title}
                        </Typography>
                        <ul>
                            {footer.description.map((item) => (
                                <li key={item}>
                                    <Link href="#" variant="subtitle1" color="text.secondary">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                ))}
            </Grid>
        </Container >
    );
}