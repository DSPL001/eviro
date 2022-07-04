import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EviroConfig from 'config-items';
// project imports
import MainCard from 'ui-component/cards/MainCard';
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
          <Typography>{children}</Typography>
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
    <MainCard title="User Profile">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
            <Tab icon={<PhoneIcon />} {...a11yProps(0)} iconPosition="start" label="RECENTS" />
            <Tab icon={<FavoriteIcon />} {...a11yProps(1)} iconPosition="start" label="FAVORITES" />
            <Tab icon={<PersonPinIcon />} {...a11yProps(2)} iconPosition="start" label="NEARBY" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </MainCard>

  );
}