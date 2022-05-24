import React, { useMemo, useState } from 'react'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { SketchPicker } from 'react-color'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import Previewproduct from './Previewproduct';
import axios from 'axios'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const UploadProduct = () => {
  const formdata= new FormData()
  const formdata2= new FormData()
  const ls= useMemo(()=> ["xs", "s", "m", "l", "xl", "xxl", "3xl", "4xl", "5xl", "6xl"], [])
  const tf= useMemo(()=> ["clothes", "shirt","short","jacket", "trousers", "jewels", "hat", "mask", "ring"], [])
  const [ap, setap]= useState(()=> ({
      title: "",
      decription: "",
      size: [],
      cateogries: "", 
      color: "",
      full_images: "",
      imageIndex: "",
      imageHover: "",
      classify: "",
      type: "",
      timeup: new Date().getTime(),
      fullImage: ""
  }))
  const [pim, setpim]= useState(()=> [])
  const [lim, setlim]= useState(()=> [])
  const pi= (e)=> {
    if(e.target.files.length > 0) {
        Object.values(e.target.files).map((item, key)=> {
            formdata.append(key, item)
            setpim((prev)=> ([...prev, URL.createObjectURL(item)]))
        })
        
    }   
  }
  const li= (e)=> {
    if(e.target.files.length > 0) {
        Object.values(e.target.files).map((item, key)=> {
            formdata2.append(key, item)
            setlim((prev)=> ([...prev, URL.createObjectURL(item)]))
        })
    }
  }
  const dl= (k, i)=> {
    setpim(pim.filter(item=> item.toString() !== i.toString()))
    formdata.delete(parseInt(k))
  }
  const dli= (k, i)=> {
    setlim(lim.filter(item=> item.toString() !== i.toString()))
    formdata2.delete(parseInt(k))
  }
  const [pd, setpd]= useState(()=> false)
  
  return (
    <div style={{width: "100%", display: 'flex', gap: 10, padding: 20, backgroundColor: "#e4e6eb", flexDirection: "column"}}>
        <div style={{fontSize: 18, fontWeight: 600}}>Upload products</div>
        <div style={{width: "100%", height: 'auto'}}> 
            <div>
                <TextField onChange={(e)=> setap(prev=> ({...prev, title: e.target.value}))} id="outlined-basic-1" label="Enter your title product" variant="outlined" required />
            </div>
            <br />
            <div>
                <TextField onChange={(e)=> setap(prev=> ({...prev, decription: e.target.value}))} label="Describe about your product. Less than 20 word" required />
            </div>
            <br />
            <div>Enter size of products (Select one or more size)</div>
            <br />
            {
                ls.map((item, key)=> <FormControlLabel onChange={()=> setap(prev=> ({...prev, size: new Set([...ap.size, item])}))} key={key} control={<Checkbox {...label} value={item} />} label={item} /> )
            }
            <br />
            <div>Choose your product color: </div>
            <br />
            <SketchPicker color={ap.color} onChangeComplete={(e)=> setap(prev=> ({...prev, color: e.hex}))} />
            <br />
            {
                ap.color && ap.color
            }
            <br />
            <div>Choose your thumbnail image (Select less than 2 images)</div>
            <div style={{width: 'max-content', height: 40, position: "relative"}}>
                <br />
                <div style={{padding: 10, background: "#343536", borderRadius: 6, color: "#e4e6eb", cursor: "pointer"}}>
                    Choose images to represent your product on unilight
                </div>
                <label style={{opacity: 0, position: "absolute", left: 0, top: 25, width: "100%", cursor: "pointer"}}>
                    <input type="file" accept="image/*" multiple onChange={(e)=> pi(e)} title="" style={{cursor: "pointer"}} />
                </label>
            </div>
            <br />  
            <br />
            {
                pim?.length> 0 &&
                <div style={{width: "100%", height: "auto", display: "flex", flexDirection: "row", gap: 15, flexWrap: "wrap", alignItems: 'center',}}>
                    {
                        pim.length>0 && pim.map((item, key)=> <div style={{width: 100, height: 100, borderRadius: 10, overflow: "hidden",position: "relative"}} key={key}><img style={{width: "100%", height: "100%", objectFit: "cover"}} src={item} alt="can't display" /><div onClick={()=> dl(key, item)} style={{position: "absolute", top: 0, right: 0, transform: "translate(-10%, 10%)", width: 30, height: 30, borderRadius: "50%", display: "flex", justifyContent: 'center',alignItems: "center", cursor: "pointer", background: "#e4e6eb"}}><CloseIcon /></div></div>)
                    }                
                </div>
            }
            <br />
            <div>Choose type of your product: </div>
            <br />
            <div>
                <RadioGroup>
                    {
                        tf.map((item, key)=> <FormControlLabel onChange={()=> setap(prev=> ({...prev, type: item}))} value={item} key={key} control={<Radio />} label={item} /> )
                    }
                </RadioGroup>
                <TextField id="outlined-basic" label="Other" variant="outlined" onChange={(e)=> setap(prev=> ({...prev, type: e.target.value}))} />
            </div>
            <br />
            <div>
                Add more image to show detail your product (Less than 3)
            </div>
            <br />
            <Button variant="contained" style={{position: "relative"}}>
                <div style={{cursor: "pointer"}}>Select image</div>
                <label style={{width: "100%", height: "100%", opacity: 0, position: "absolute", left: 0, top: 0, cursor: "pointer"}}>
                    <input type="file" accept="image/*" multiple tabIndex={-1} style={{cursor: "pointer"}} onChange={(e)=> li(e)} title="" />
                </label>
            </Button>
            <br />
            {
                lim?.length> 0 &&
                <div style={{width: "100%", height: "auto", display: "flex", flexDirection: "row", gap: 15, flexWrap: "wrap", alignItems: 'center',}}>
                    {
                        lim.length>0 && lim.map((item, key)=> <div style={{width: 100, height: 100, borderRadius: 10, overflow: "hidden",position: "relative"}} key={key}><img style={{width: "100%", height: "100%", objectFit: "cover"}} src={item} alt="can't display" /><div onClick={()=> dli(key, item)} style={{position: "absolute", top: 0, right: 0, transform: "translate(-10%, 10%)", width: 30, height: 30, borderRadius: "50%", display: "flex", justifyContent: 'center',alignItems: "center", cursor: "pointer", background: "#e4e6eb"}}><CloseIcon /></div></div>)
                    }                
                </div>
            }
            <br />
            <div>
            Price: 
            </div>
            <div>
                <TextField onChange={(e)=> setap(prev=> ({...prev, price: e.target.value}))} id="outlined-basic-3" label="Enter your price" variant="outlined" required />
            </div>
            <br />
            <Button onClick={()=> setpd(()=> true)} variant="contained" style={{position: "relative"}}>
                Preview
            </Button>
        </div>
        
        {
            pd===true &&
            <Previewproduct {...ap} lim={lim} pim={pim} setpd={setpd} formdata={formdata} /> 
        }
    </div>
  )
}

export default UploadProduct