import React, { useRef, useContext, Fragment, useEffect } from "react"
import { NavContext } from "../components/context/NavContext"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { useInView } from "react-intersection-observer"
import { getsettingshop, settingshop } from "../action/setting_shop"
import { useTranslation } from 'react-i18next'

const Setting = (props) => {
    const { t, i18n } = useTranslation()
    useEffect(()=> {
        if(props.in4[0]?.id_user) {
            getsettingshop(setLang, setTheme, props.in4[0]?.id_user)
        }
    },[props.in4[0]?.id_user])

    const mref= useRef()
    const { navChoices }= useContext(NavContext)
    const [lang, setLang] = useState(2)
    const handleChangeLang = (e) => {
        setLang(e.target.value)
        settingshop(setLang, props.in4[0]?.id_user, e.target.value, "language")
        // i18n.changeLanguage("vi")
    }
    const [theme, setTheme]= useState(2)
    const handleChangeTheme= (e)=> {
        console.log(e.target.value)
        setTheme(e.target.value)
        settingshop(setTheme, props.in4[0]?.id_user, e.target.value, "theme")
    }
    const { ref, inView }= useInView({
        threshold: 0
    })
    const [check, setCheck]= useState(()=> false)
    useEffect(()=> {
      if(inView=== true) {
          setCheck(()=> true)
      }
      else {
          setCheck(()=> false)
      }
    }, [inView, check])    
    useEffect(()=> {
        if(check=== true){ 
          document.body.style.overflow= "hidden"
        }
        else {
          document.body.style.overflow= "auto"
        }
        return ()=> {
            document.body.style.overflow= "auto"
        }
    }, [check])
  return (
    <Fragment>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {
                parseInt(theme)=== 1 && 
                <Fragment>
                    <link rel="stylesheet" href="https://res.cloudinary.com/cockbook/raw/upload/v1651066485/single/additional_xmnnfj.css" referrerPolicy="no-referrer" />
                    <link rel="stylesheet" href="https://res.cloudinary.com/cockbook/raw/upload/v1651067745/single/setting_qsegmq.css" referrerPolicy="no-referrer" />
                </Fragment>
            }
        </Helmet>
        <div className="cp1" ref={mref} style={{width: "max-content", height: "calc(100%)",transform:
        navChoices.setting
            ? "translateX(0)"
            : "translateX(101%",transition: "transform 0.2s linear", backgroundColor: "#fff", position: "fixed", right: 0, top: 0, zIndex: 998, padding: 10, overflow: "auto"}}>
            <div style={{fontSize: 32, fontWeight: 600, color: "#000", width: "100%", padding: "10px 0"}}>
                {t('title')}
            </div>      
            <br />
            <div style={{fontSize: 24, fontWeight: 600, color: "#000", width: "100%", padding: "10px 0"}}>
                Theme
            </div>
            <FormControl style={{width: 200}} className="pm4">
                <InputLabel id="demo-simple-select-label" className="la2">Theme</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={theme}
                label="Theme"
                onChange={handleChangeTheme}
                
                >
                    <MenuItem className="wq1" value={1}>Dark</MenuItem>
                    <MenuItem className="wq1" value={2}>Light</MenuItem>
                </Select>
            </FormControl>
            <br />
            <div ref={ref} style={{fontSize: 24, fontWeight: 600, color: "#000", width: "100%", padding: "10px 0"}}>
                Language
            </div>
            <FormControl style={{width: 200}}>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={lang}
                label="Language"
                onChange={handleChangeLang}
                >
                    <MenuItem className="wq1" value={2}>English</MenuItem>
                    <MenuItem className="wq1" value={1}>Vietnamese</MenuItem>
                </Select>
            </FormControl>
        </div>
    </Fragment>
  )
}

export default React.memo(Setting)