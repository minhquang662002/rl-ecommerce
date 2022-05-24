import { Radio } from '@mui/material'
import React, { memo } from 'react'

const EditGender = (props) => {
  return (
    <>
        <div style={{display: "flex", alignItems: "center"}}>Gender: {
            parseInt(props.data?.gender) === 1 && "Male" 
        }
        {
            parseInt(props.data?.gender)===2 && "Female"
        }
        {
            parseInt(props.data?.gender)===3 && "Other"
        }
        </div>
        <br />
        <div>
            <div>
                Edit: 
            </div>
            <Radio
                checked={parseInt(props.gender) === 1}
                onChange={props.handleGenderChange}
                value={1}
                name="radio-buttons"
                inputProps={{ 'aria-label': 1 }}
            />
            <span>Male</span>
            <Radio
                checked={parseInt(props.gender) === 2}
                onChange={props.handleGenderChange}
                value={2}
                name="radio-buttons"
                inputProps={{ 'aria-label': 2 }}
                />
            <span>Female</span>
            <Radio
                checked={parseInt(props.gender) === 3}
                onChange={props.handleGenderChange}
                value={3}
                name="radio-buttons"
                inputProps={{ 'aria-label': 3 }}
            />
            <span>Other</span>
        </div>
    </>
  )
}

export default memo(EditGender)