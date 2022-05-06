import React, { Fragment } from 'react'
import Popover from '@mui/material/Popover'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'
import EditAddress from "./EditAddress"
import Button from '@mui/material/Button'
import PhoneEmail from './PhoneEmail'


const AddressInfo = (props) => {

  return (
    <Fragment>
        <div>
            <div className="ma2" style={{fontSize: 24, color: "#000", paddingBottom: 40,borderBottom: '1px solid #e4e6eb', width: "100%"}}>My Address</div>
            <br />
            <PhoneEmail user={props.data?.phonenumber} />
            <br />
            <span>
                Your address is: {props.address}
            </span>
        <br />   
        <PopupState variant="popover" popupId="demo-popup-popover" >
            {(popupState) => (
                <div>
                <Button onClick={()=> props.setOe(()=> true)} variant="contained" {...bindTrigger(popupState)} style={{margin: "10px 0"}}>
                    Change your address
                </Button>
                <Popover 
                    open={props.oe}
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                        }}
                        transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                        }}
                >
                    <EditAddress setOe={props.setOe} address={props.specificLocation} id_user={props.id_user} setAddress={props.setAddress} setSpecificLocation={props.setSpecificLocation} />
                </Popover>
                </div>
            )}
        </PopupState>    
        </div>
    </Fragment>
  )
}

export default AddressInfo