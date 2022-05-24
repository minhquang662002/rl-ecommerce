import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { NavContext } from '../context/NavContext';
import CaptchaTest from './ConfirmCapcha';
import {validateCaptcha } from 'react-simple-captcha';
import { login } from '../../action/login';
import { CircularProgress } from '@mui/material';

export default function BasicTextFields() {
  const [user, setUser]= React.useState(()=> ({
    email: "",
    password: "",
  }))
  const navigate= useNavigate()
  const { setNavChoices2 }= React.useContext(NavContext)
  const [log, setLog]= React.useState(()=> false)
  const [logged, setLogged]= React.useState(()=> false)
  const [loading, setLoading]= React.useState(()=> false)
  const [checkUser, setCheckUser]= React.useState(()=> undefined)
  const [captcha, setCaptcha]= React.useState(()=> "")
  const doSubmit = () => {
    if (validateCaptcha(captcha)===true) {
        alert('Captcha Matched');
        loadCaptchaEnginge(6); 
    }

    else {
        alert('Captcha Does Not Match');
    }
  };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },minHeight: "100vh", marginLeft: "auto", marginRight: "auto"
      }}
      style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}
      noValidate
      autoComplete="off"
      
    >
      <Stack>
        <TextField type="email" required={true} onChange={(e)=> setUser(prev=> ({...prev, email: e.target.value}))} value={user.email} autoComplete="off"  id="outlined-basic" label="Email" variant="outlined" />
      </Stack>
      <Stack>
        <TextField type="password" required={true} onChange={(e)=> setUser(prev=> ({...prev, password: e.target.value}))} value={user.password} autoComplete="off"  id="outlined-basic" label="Password" variant="outlined" />
      </Stack>
      <Stack>
        <CaptchaTest captcha={captcha} setCaptcha={setCaptcha} />
      </Stack>
      <br />
      <Stack>
        <Button variant="contained" onClick={()=> login(user, setLog, setNavChoices2, 1, setLogged, setLoading, setCheckUser)} >
        {
          loading=== false ? "Log in" : <CircularProgress style={{width: 12, height: 12}} color="secondary" />
        }
        </Button>
      </Stack>
    </Box>
  );
}