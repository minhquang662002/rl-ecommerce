import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { memo } from 'react'

const EditDateofBirth = (props) => {
  return (
    <div className="br1" style={{display: "flex", flexDirection: "column", gap: 10}}>
        <div style={{display: "flex" ,alignItems: "center"}}>Born: {
            props.data?.date_of_birth  
        }
        /
        {
            props.data?.month_of_birth  
        }
        /
        {
            props.data?.year_of_birth  
        }
        </div>
        <br />
        <div >
            <div>Edit: </div>
            <div style={{display: 'flex', flexDirection: "row", alignItems: "center", gap: 10}}>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Date</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.date}
                            label="date"
                            onChange={props.handleChangeBirthDate}
                            displayEmpty
                        >
                            {
                                Array.from(Array(31).keys()).map((item, key)=> (

                                    <MenuItem key={key} value={key + 1}>{key  +1}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Month</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.month}
                            label="month"
                            onChange={props.handleChangeMonthDate}
                        >
                            {
                                Array.from(Array(12).keys()).map((item, key)=> (

                                    <MenuItem key={key} value={key + 1}>{key  +1}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }} > 
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" >Year</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.year}
                            label="year"
                            onChange={props.handleChangeYearDate}
                        >
                            {
                                Array.from(Array(100).keys()).map((item, key)=> (

                                    <MenuItem key={key} value={key + 1923}>{key  +1923}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Box>
            </div>
        </div>
    </div>
  )
}

export default memo(EditDateofBirth)