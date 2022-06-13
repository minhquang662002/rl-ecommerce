import React, { useEffect } from 'react'
import "./OrderSuccess.sass"
import { Button, IconButton, Snackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const OrderSuccess = (props) => {
  useEffect(() => {
      setTimeout(()=> {
          props.setOrderSuccess(()=> false)
      }, 4000)
  }, [props.setOrderSuccess])
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={()=> props.setOrderSuccess(()=> false)}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={()=> props.setOrderSuccess(()=> false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <Snackbar
        open={props.orderSuccess}
        autoHideDuration={6000}
        onClose={()=> props.setOrderSuccess(()=> false)}
        message="The order has been successfully added to cart"
        action={action}
      />
  )
}

export default OrderSuccess