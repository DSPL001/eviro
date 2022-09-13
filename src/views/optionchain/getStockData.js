import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const getStockData = ()=> {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" endIcon={<SendIcon />}>
        Sumbit
      </Button>
    </Stack>
  );
}
export default getStockData
