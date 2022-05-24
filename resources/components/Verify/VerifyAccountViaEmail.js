import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { verifyAccount } from '../../action/verify_account'
import { createverifycode } from '../../action/create_verify_code'
import "./VerifyAccountViaEmail.sass"

const VerifyAccountViaEmail = () => {
  const [verifyCode, setVerifyCode]= useState(()=> "")
  const [state, setState]= useState(()=> NaN)
  const location = useLocation().state
  const navigate= useNavigate()
  useEffect(()=> {
    (()=> {
      createverifycode()
    })()
  }, [])
  if(location?.isAuthencating=== true) {
    return (
      <div className="verify-email" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute', gap: 10}}>
          <div style={{textAlign: 'center'}}>We've just sent to email {location?.email} a verify code include 6 digits. Type it to below form to verify your account</div>
          <div>
              <input type="text" onChange={(e)=> setVerifyCode(e.target.value)} value={verifyCode} style={{padding: 12, border: '1px solid #b7a4a4', borderRadius: '10px'}}/>
          </div>
          {
            state===0 &&
              <div style={{color: "red"}}>Verify code is incorrect. Please try again</div>
          }
          <div>
              <button className="btn" onClick={()=> verifyAccount(verifyCode, navigate, setState)} style={{borderRadius: 80, padding: '12px 30px', cursor: "pointer"}}>Submit</button>
          </div>
          <div>
            You've not received verify code ?
          </div>
          <div>
            <button className="btn" onClick={()=> createverifycode()}style={{borderRadius: 80, padding: '12px 30px', cursor: 'pointer'}}>Send again</button>
          </div>
      </div>
    )

  }
  else {
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute', gap: 10}}>
        <div>Page has expired</div>
        <div>
          <button onClick={()=> navigate("/")}  style={{borderRadius: 80, padding: '12px 30px', cursor: 'pointer'}}>Home</button>
        </div>
        
      </div>
    )
  }
}


export default VerifyAccountViaEmail