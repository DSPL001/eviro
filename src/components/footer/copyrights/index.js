import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export function Copyright(props) {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={24}>
    <Typography  variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}{new Date().getFullYear()}{' '}  
          <Link color="inherit" href="https://demeter-systems.com/">
              Demeter Systems Private Limited
          </Link>          
          {'.'}
      </Typography>
    </Paper>
  );
}