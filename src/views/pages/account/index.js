import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PasswordTwoToneIcon from '@mui/icons-material/PasswordTwoTone';
import SummarizeTwoToneIcon from '@mui/icons-material/SummarizeTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EviroConfig from 'config-items';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import ResetPassword from './ResetPassword';
import TwoFactorAuthentication from './TwoFactorAuthentication';
import PersonalData from './PersonalData';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Profile() {
    const [value, setValue] = React.useState(0);
    const { user: currentUser } = useSelector((state) => state.auth);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const navigate = useNavigate();
    if (!currentUser) {
        navigate(EviroConfig.path.authentication.login);
    }

    return (
        <MainCard title="Account Settings">
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
                        <Tab icon={<PasswordTwoToneIcon />} {...a11yProps(0)} iconPosition="start" label="Password" />
                        <Tab icon={<SummarizeTwoToneIcon />} {...a11yProps(1)} iconPosition="start" label="Two Factor Authentication" />
                        <Tab icon={<ManageAccountsTwoToneIcon />} {...a11yProps(2)} iconPosition="start" label="Personal Data" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <ResetPassword />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TwoFactorAuthentication/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <PersonalData/>
                </TabPanel>
            </Box>
        </MainCard>

    );
}