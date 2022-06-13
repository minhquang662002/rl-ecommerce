import * as React from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

export default function DateExecute(props) {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        disablePast={true}
        inputFormat="dd/MM/yyyy HH:mm"
        renderInput={(props) => <TextField {...props} />}
        label="Lock"
        value={props.valuetime}
        onChange={(newValue) => {
          props.setvaluetime(newValue)
        }}
      />
    </LocalizationProvider>
  )
}