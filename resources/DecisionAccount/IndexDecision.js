import React, { useState } from 'react'
import LockIcon from '@mui/icons-material/Lock';
import { Helmet } from 'react-helmet-async';
import { logout } from '../action/logout';
import { CircularProgress } from '@mui/material';
import moment from 'moment';
import { Link } from 'react-router-dom';

const IndexDecision = (props) => {
  const [loading, setloading]= useState(()=> false)
  return (
    <>
        <Helmet>
            <title>Unilight</title>
        </Helmet>
        <div style={{width: "100%", height: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f2f0f5"}}>
            <div style={{width: "100%", maxWidth: 600, height: "auto", borderRadius: 10, background: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 10 }}>
                <img draggable={false} src="https://www.pngitem.com/pimgs/m/20-202249_lock-protect-safety-secure-safe-security-password-svg.png" alt="open" style={{width: 150, height: 150, objectFit: 'cover'}} />
                <br />
                <div style={{fontSize: 20, fontWeight: 700, textTransform: "capitalize", textAlign: 'center'}}>{props.firstname}, your accout has been locked</div>
                <br />
                <div style={{fontSize: 16, textAlign: 'center'}}>We saw unusual activity on your account. This may meant that someone has used your account without your knowledge</div>
                <br />
                <div style={{backgroundColor: "#f2f0f5", borderRadius: 10,padding: 10, display: "flex", alignItems: "center", width: "100%", gap: 6}}>
                    <div style={{display: "flex", justifyContent: 'center',alignItems: "center", borderRadius: "50%", backgroundColor: "#2e89ff", width: 28, height: 28}}>
                        <LockIcon style={{color: "#fff", width: 20, height: 20}} /> 
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center"}}>
                        {
                            parseInt(props.status) > 10000 &&
                            <div style={{fontSize: 18, fontWeight: 600}}>
                                Your account will be locked temporary to {moment(parseInt(props.status)).format("HH:mm DD/MM/YYYY")}
                            </div>
                        }
                        <div>
                            Your account was blocked by admin 
                        </div>
                    </div>
                </div>
                <br />
                <div className="fgljdfadfd" style={{width: "100%", height: 40, color: "#fff", background: "#2e89ff", borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 600, cursor: "pointer"}}>
                    <a href="/help" target={"_blank"} style={{textDecoration: "none"}}>
                        Support 
                    </a>
                </div>
                <br />
                <div onClick={()=> logout(setloading)} className="fgljdfadfd" style={{width: "100%", height: 40, color: "#3a3b3c", background: "#f2f0f5", borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 600, cursor: "pointer"}}>
                    {
                        loading=== true ? <CircularProgress style={{width: 16, height: 16}} color={"secondary"} /> : "Log out"
                    } 
                </div>
            </div>
        </div>
    </>
  )
}

export default IndexDecision