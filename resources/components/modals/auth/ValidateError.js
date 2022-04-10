import React from 'react'

const ValidateError = (props) => {
  return (
    <div style={{color: 'red'}}>{props.err}</div>
  )
}

export default ValidateError