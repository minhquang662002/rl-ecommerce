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
import axios from "axios"
import { v4 } from 'uuid';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const UploadProduct = (props) => {
  let formdata= new FormData()
  let formdata2= new FormData()
  const ls= useMemo(()=> ["xs", "s", "m", "l", "xl", "xxl", "3xl", "4xl", "5xl", "6xl"], [])
  const tf= useMemo(()=> ["clothes", "shirt","short","jacket", "trousers", "jewels", "hat", "mask", "ring"], [])
  const [listimage1, setlistimage1]= useState(()=> [])
  const [listimage2, setlistimage2]= useState(()=> [])
  const [ap, setap]= useState(()=> ({
      id_product: v4(),
      title: "",
      decription: "",
      size: [],
      cateogries: "All,Best seller,Bottom,Dress,New Arrival,Women", 
      color: "",
      classify: "lastest",
      type: "",
      timeup: new Date().getTime(),
      
  }))
  const [pim, setpim]= useState(()=> [])
  const [lim, setlim]= useState(()=> [])
  const pi= (e)=> {
    if(e.target.files.length > 0) {
        Object.values(e.target.files).map((item, key)=> {
            formdata.append("img-"+key, item)
            setlistimage1(prev=> ([...prev, item]))
            setpim((prev)=> ([...prev, {i: URL.createObjectURL(item), d: item.lastModified, k: key}]))
            return
        })
    }   
  }
  const li= (e)=> {
    if(e.target.files.length > 0) {
        Object.values(e.target.files).map((item, key)=> {
            formdata2.append("img-"+key, item)
            setlistimage2(prev=> ([...prev, item]))
            setlim((prev)=> ([...prev, {i: URL.createObjectURL(item), d: item.lastModified, k: key}]))
            return
        })
    }
  }
  const [pd, setpd]= useState(()=> false)
  const uploadImageIndex= async ()=> {
      listimage1?.map((item, key)=> formdata.append("img-"+key, item))
      const res= await axios({
          url: "http://localhost:8000/api/v1/image/index",
          method: "post",
          data: formdata,
          headers: {
            "Content-Type": "multipart/form-data"
          }
      })
      const result= await res.data
      return result
  }
  const uploadfullimage= async()=> {
    listimage2?.map((item, key)=> formdata2.append("img-"+key, item))
    const res= await axios({
        url: "http://localhost:8000/api/v1/image/full",
        method: "post",
        data: formdata,
        headers: {
          "Content-Type": "multipart/form-data"
        }
    })
    const result= await res.data
    return result
  }
  const [listimageindex, setlistimageindex]= useState(()=> [])
  const [listfullimage, setlistfullimage]= useState(()=> [])
  
  return (
    <div style={{width: "100%", display: 'flex', gap: 10, padding: 20, backgroundColor: "#e4e6eb", flexDirection: "column", position: "relative"}}>
        <div ref={props.myRef2} style={{position: "absolute", top: 0, left: 0}}></div>
        <div style={{fontSize: 18, fontWeight: 600}}>Sell products</div>
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
                        pim.length>0 && pim.map((item, key)=> <div style={{width: 100, height: 100, borderRadius: 10, overflow: "hidden",position: "relative"}} key={key}><img style={{width: "100%", height: "100%", objectFit: "cover"}} src={item.i} alt="can't display" />
                            <div onClick={()=> {
                                setlistimage1(listimage1?.filter((item2)=> item2.lastModified != item.d))
                                setpim(pim.filter((v, i)=> i !=( key )))
                            }} style={{position: "absolute", top: 0, right: 0, transform: "translate(-10%, 10%)", width: 30, height: 30, borderRadius: "50%", display: "flex", justifyContent: 'center',alignItems: "center", cursor: "pointer", background: "#e4e6eb"}}>
                                <CloseIcon />
                            </div>
                        </div>
                        )
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
                <label style={{width: "100%", height: "100%", opacity: 0, position: "absolute", left: 0, top: 0, cursor: "pointer", marginBottom: 20}}>
                    <input type="file" accept="image/*" multiple tabIndex={-1} style={{cursor: "pointer"}} onChange={(e)=> li(e)} title="" />
                </label>
            </Button>
            <br />
            <br />
            {
                lim?.length> 0 &&
                <div style={{width: "100%", height: "auto", display: "flex", flexDirection: "row", gap: 15, flexWrap: "wrap", alignItems: 'center',}}>
                    {
                        lim.length>0 && lim.map((item, key)=> <div style={{width: 100, height: 100, borderRadius: 10, overflow: "hidden",position: "relative"}} key={key}><img style={{width: "100%", height: "100%", objectFit: "cover"}} src={item.i} alt="can't display" />
                        <div onClick={()=> {
                            setlistimage2(listimage2?.filter((item2)=> item2.lastModified != item.d))
                            setlim(lim.filter((v, i)=> i !=( key )))
                        }} style={{position: "absolute", top: 0, right: 0, transform: "translate(-10%, 10%)", width: 30, height: 30, borderRadius: "50%", display: "flex", justifyContent: 'center',alignItems: "center", cursor: "pointer", background: "#e4e6eb"}}>
                            <CloseIcon />
                            </div>
                        </div>)
                    }                
                </div>
            }
            <br />
            <div style={{marginBottom: 20}}>
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
            <Previewproduct {...ap} lim={lim} pim={pim} setpd={setpd} formdata={formdata} formdata2={formdata2}
                uploadImageIndex={uploadImageIndex} uploadfullimage={uploadfullimage} listimageindex={listimageindex}
                listfullimage={listfullimage} id_shop={props.id_shop} id_user={props.id_user}
            /> 
        }
    </div>
  )
}

export default UploadProduct