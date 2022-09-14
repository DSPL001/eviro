import { useState, useRef, useEffect } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import {   
    Avatar,
    Badge,
    Box,
    ButtonBase,    
    ClickAwayListener,
    Grid,
    Paper,
    Popper,    
    useMediaQuery
} from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';
// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
// assets
import { IconBuildingStore } from '@tabler/icons';
import { useDispatch } from 'react-redux';
import { marketStatus } from 'slices/se-Basic';
import StatusCard from './statusCard';
// notification status options
const status = [
    {
        index: "",
        last: "",
        market: "Capital Market",
        marketStatus: "Error",
        marketStatusMessage: "Market Status is Loading",
        percentChange: "",
        tradeDate: "",
        variation: ""
    },
    {
        index: "",
        last: "",
        market: "Currency",
        marketStatus: "Error",
        marketStatusMessage: "Market Status is Loading",
        percentChange: "",
        tradeDate: "",
        variation: ""
    },
    {
        index: "",
        last: "",
        market: "Commodity",
        marketStatus: "Error",
        marketStatusMessage: "Market Status is Loading",
        percentChange: "",
        tradeDate: "",
        variation: ""
    },
    {
        index: "",
        last: "",
        market: "Debt",
        marketStatus: "Error",
        marketStatusMessage: "Market Status is Loading",
        percentChange: "",
        tradeDate: "",
        variation: ""
    }
]
// ==============================|| NOTIFICATION ||============================== //

const StockStatusSection = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const matchesXs = useMediaQuery(theme.breakpoints.down('md'));
    const [badge, setBadge] = useState('info');
    const [marketstatus, setMarketStatus] = useState(status);
    const [open, setOpen] = useState(false);
    /**
     * anchorRef is used on different componets and specifying one type leads to other components throwing an error
     * */
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    const prevOpen = useRef(open);
    useEffect(() => {
        setTimeout(() => {
            dispatch(marketStatus()).unwrap()
                .then(succ => {
                    if (succ != null) {
                        setMarketStatus(succ);                        
                        const isFound = marketstatus.some(element => {
                            if (element.market === 'Capital Market' && element.marketStatus === 'Open') {
                                return true
                            }
                            return false
                        });
                        if (isFound) {
                            setBadge('success');
                        }
                        else {
                            setBadge('error');
                        }
                    }
                    else {
                        setBadge('warning');
                    }
                })
                .catch(err => {
                    console.log(err)
                    setBadge('warning');
                })
        }, 10000);
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open, dispatch, marketstatus]);

    return (
        <Badge color={badge} badgeContent="" variant="dot">
            <Box
                sx={{
                    ml: 2,
                    mr: 0,
                    [theme.breakpoints.down('md')]: {
                        mr: 0
                    }
                }}
            >
                <ButtonBase sx={{ borderRadius: '12px' }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            '&[aria-controls="menu-list-grow"],&:hover': {
                                background: theme.palette.secondary.dark,
                                color: theme.palette.secondary.light
                            }
                        }}
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        color="inherit"
                    >
                        <IconBuildingStore stroke={1.5} size="1.3rem" />
                    </Avatar>
                </ButtonBase>
            </Box>
            <Popper
                placement={matchesXs ? 'bottom' : 'bottom-end'}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [matchesXs ? 5 : 0, 20]
                            }
                        }
                    ]
                }}
            >
                {({ TransitionProps }) => (
                    <Transitions position={matchesXs ? 'top' : 'top-right'} in={open} {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                                    <Grid container direction="column" spacing={2}>
                                        <Grid item xs={12}>
                                            <PerfectScrollbar style={{ height: '100%', maxHeight: 'calc(100vh - 205px)', overflowX: 'hidden' }} >
                                                <StatusCard info={marketstatus} />
                                            </PerfectScrollbar>
                                        </Grid>
                                    </Grid>
                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </Badge >
    );
};

export default StockStatusSection;