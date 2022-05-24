import React, {  useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate } from 'react-simple-captcha';
import TextField from '@mui/material/TextField';
import "./a.sass"

export function CaptchaTest(props) {

    useEffect (()=> {
        loadCaptchaEnginge(6); 
    }, []);
    return (<div>
        <div className="container">
            <div className="form-group">
                <div className="col mt-3 sddsd">
                    <TextField onChange={(e)=> props.setCaptcha(e.target.value)} value={props.captcha} placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text"></TextField>
                </div>
                <br />
                <div className="col mt-3">
                    <LoadCanvasTemplate />
                </div>
            </div>

        </div>
    </div>);
}

export default CaptchaTest;