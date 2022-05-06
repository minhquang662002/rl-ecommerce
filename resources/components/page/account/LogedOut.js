import React, { memo, Fragment } from 'react'
import { Link } from "react-router-dom"
import Ripples from "react-ripples"

const LogedOut = () => {
  return (
    <Fragment>
        <div className="p1a" style={{position: "absolute", top: "50%", left:"50%", transform: "translate(-50%, -50%)", textAlign: "center"}}>
            <div>Oops, you are logged out or not logged in </div>
            <br />  
            <div>Login to continue</div>
            <br />
            <Link to="/login">
                <Ripples>
                    <button type="button" className="rp1">
                        Login
                    </button>
                </Ripples>
            </Link>
        </div>
    </Fragment>
  )
}

export default memo(LogedOut)