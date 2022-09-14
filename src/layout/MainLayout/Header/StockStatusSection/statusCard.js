import PropTypes from 'prop-types';
// material-ui
import { useTheme, styled } from '@mui/material/styles';
import {
    Avatar,
    Chip,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Typography
} from '@mui/material';

// assets
import { IconBuildingStore } from '@tabler/icons';

// styles
const ListItemWrapper = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    padding: 16,
    '&:hover': {
        background: theme.palette.primary.light
    },
    '& .MuiListItem-root': {
        padding: 0
    }
}));

// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const StatusCard = ({ info }) => {
    const theme = useTheme();
    const chipErrorSX = {
        color: theme.palette.orange.dark,
        backgroundColor: theme.palette.orange.light,
        marginRight: '5px'
    };
    
    const chipSuccessSX = {
        color: theme.palette.success.dark,
        backgroundColor: theme.palette.success.light,
        height: 28
    };
    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 330,
                py: 0,
                borderRadius: '10px',
                [theme.breakpoints.down('md')]: {
                    maxWidth: 300
                },
                '& .MuiListItemSecondaryAction-root': {
                    top: 22
                },
                '& .MuiDivider-root': {
                    my: 0
                },
                '& .list-container': {
                    pl: 7
                }
            }}
        >
            {info.map((option) => (
                <ListItemWrapper key={option.market}>
                    <ListItem alignItems="center" >
                        <ListItemAvatar>
                            <Avatar
                                sx={{
                                    color: theme.palette.secondary.dark,
                                    backgroundColor: theme.palette.secondary.light,
                                    border: 'none',
                                    borderColor: theme.palette.secondary.main
                                }}
                            >
                                <IconBuildingStore stroke={1.5} size="1.3rem" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={<Typography variant="subtitle1">{option.market}</Typography>} />
                        <ListItemSecondaryAction>
                            <Grid container justifyContent="flex-end">
                                <Grid item xs={12}>
                                    <Typography variant="subtitle2" display="block" gutterBottom sx={{ color: theme.palette.info }}>
                                        {option.marketStatus}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Grid container direction="column" className="list-container">
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item>
                                    <Chip size="small" label={option.marketStatusMessage} sx={option.marketStatus === 'Open' ? chipSuccessSX : chipErrorSX} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </ListItemWrapper>
            ))}

        </List>
    );
};

StatusCard.propTypes = {
    info: PropTypes.array
}
export default StatusCard;