import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';
import { fakeSleep } from './DetailPage';

export default function IconAlerts(props) {
  React.useEffect(()=> {
    (async()=> {
        await fakeSleep(2500)
        props.setCheck(false)
    })()
  }, [props.setCheck])
  return (
    <Stack sx={{ width: '100%', position: "fixed", height: "100%", top: 0, left: 0, display: "flex", justifyContent: 'center',alignItems: 'center', backgroundColor: "rgba(0, 0 ,0 ,0.75)" }} spacing={2} >
      
      <Alert
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" />,
        }}
      >
        Successfully alert — check it out!
      </Alert>
      
    </Stack>
  );
}