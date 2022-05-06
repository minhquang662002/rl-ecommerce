import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import axios from 'axios'
import { showlistdistrict } from '../../../action/show_list_district'
import { setnewaddress } from '../../../action/set_new_address'
import { useDispatch } from 'react-redux'  
import PopupTemporarily from '../../../popup_temporarily/PopupTemporarily'
import { useMemo } from 'react'

const EditAddress = (props) => {
  const [address, setAddress]= useState(()=> ({
    address: "",
    ward: "",
    district: "",
    province: ""
  }))
  const [showPopup, setShowPopup]= useState(()=> false)
  const message= useMemo(()=> "Update successfully", [])
  const [listProvince, setListProvince]= useState(()=> [])
  const [listDistrict, setListDistrict]= useState(()=> [])
  const [listWard, setListWard]= useState(()=> [])
  const dispatch= useDispatch()
  useEffect(()=> {
      (async()=> {
        const res= await axios({
            url: "http://localhost:8000/list/address",
            method: "get",
            timeout: 10000,
            timeoutErrorMessage: "Time out login",
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
            },
            xsrfCookieName: document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
            xsrfHeaderName: 'X-CSRF-TOKEN',
            withCredentials: false,
            validateStatus: (status)=> {
                return status >= 200 && status < 300
            },
            maxRedirects: 10,
            responseType: "json",
            params: {
                query_string: "province"
            }
        })
        const result= await res.data
        setListProvince(result)
      })()
      return ()=> setListProvince(()=> [])
  },[])
  return (
    <Box className="bx1" sx={{ minWidth: 120, width: 820, padding: 20, display: "flex", flexDirection: "column", justifyContent: 'space-between',alignItems: "center"}}>
      <Box className="bp2" sx={{width: "500px", display: "flex", flexDirection: "row", justifyContent: "space-evenly",alignItems: "center", gap: 10}} >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Province</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={address.province}
            label="Province"
            onChange={(e)=> {setAddress(prev=> ({...prev, province: e.target.value}));showlistdistrict(setListDistrict,"district" ,e.target.value)}}
          >
              {
                  listProvince?.map((item, key)=> <MenuItem key={key} value={item.province_id}>{item.province_name}</MenuItem>)
              }
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">District</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={address.district}
            label="District"
            disabled={listDistrict?.length< 1 ? true : false}
            onChange={(e)=> {setAddress(prev=> ({...prev, district: e.target.value}));showlistdistrict(setListWard, "ward",e.target.value)}}
          >
              {
                  listDistrict?.map((item, key)=> <MenuItem key={key} value={item.district_id}>{item.district_name}</MenuItem>)
              }
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Ward</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={address.ward}
            label="Ward"
            disabled={listWard?.length< 1 ? true : false}
            onChange={(e)=> setAddress(prev=> ({...prev, ward: e.target.value}))}
          >
              {
                  listWard?.map((item, key)=> <MenuItem key={key} value={item.ward_id}>{item.ward_name}</MenuItem>)
              }
          </Select>
        </FormControl>
      </Box>
      <br />
      <br />
      <div style={{width: "100%"}}>Address</div>
      <br />
      <div>
        <input className="iq1" placeholder={props.address} value={address.address} onChange={(e)=> setAddress(prev=> ({...prev, address: e.target.value}))} type="text" style={{width: '100%', height: '100%', overflow: "hidden",width: 500, height: 200, boxSizing: "border-box", padding: 10, border: "1px solid #000", fontSize: 18}}  />
      </div>
      <br />
      <Box>
          <Button onClick={()=> setnewaddress(props.id_user, props.setAddress, props.setSpecificLocation, address.province, address.district, address.ward, address.address, dispatch, props.setOe, setShowPopup)} variant="contained">Save</Button>
      </Box>
      {
        showPopup=== true &&
      <PopupTemporarily showPopup={showPopup} setShowPopup={setShowPopup} message={message}  />
      }
    </Box>
  )
}

export default EditAddress