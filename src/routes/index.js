import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Pricing from '../layouts/landing/pricing';
import Login from '../layouts/authentication/login';
import Register from '../layouts/authentication/register';
import ForgotPassword from '../layouts/authentication/forgotpassword';

function Routepages() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Pricing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Box>
  );
}
export default Routepages;