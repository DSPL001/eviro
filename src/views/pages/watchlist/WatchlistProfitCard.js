import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import { IconArrowUpRightCircle } from '@tabler/icons';
// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({  
    backgroundColor: green.A100,
    color: green.A100,  
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${green.A700} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${green.A700} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
        borderRadius: '50%',
        top: -160,
        right: -130
    }
}));

// ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //

const WatchlistProfitCard = ({ isLoading, StockName, Price }) => {
    const theme = useTheme();
    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2 }}>
                        <List sx={{ py: 0 }}>
                            <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            ...theme.typography.commonAvatar,
                                            ...theme.typography.largeAvatar,
                                            backgroundColor: green[500],
                                            color: '#fff'
                                        }}
                                    >
                                         <IconArrowUpRightCircle fontSize="inherit" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{
                                        py: 0,
                                        mt: 0.45,
                                        mb: 0.45
                                    }}
                                    primary={
                                        <Typography variant="h4" sx={{ color: '#000' }}>
                                           {Price}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography variant="subtitle2" sx={{ color: theme.palette.grey[900], mt: 0.25 }}>
                                            {StockName}
                                        </Typography>
                                    }
                                />
                                <Stack direction="row" edge='start' spacing={1}>
                                    <Chip size="small" label="P" color="secondary" />
                                    <Chip size="small" label="W" color="warning" />                                    
                                </Stack>
                            </ListItem>
                        </List>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

WatchlistProfitCard.propTypes = {
    isLoading: PropTypes.bool,
    StockName: PropTypes.string,
    Price: PropTypes.number
};

export default WatchlistProfitCard;
