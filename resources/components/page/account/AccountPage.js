import "./AccountPage.sass"
import { createContext, Fragment, useEffect, useState } from "react"
import axios from "axios"
import { logout } from "../../../action/logout"
import LoadingSuspense from "../../loading/LoadingSuspense"
import "./h.sass"
import A2 from "../../../UserPage/A2"
import Button from '@mui/material/Button'
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"
import TextField from '@mui/material/TextField';
import LogedOut from "./LogedOut"
import AddressInfo from "./AddressInfo"
import EditDateofBirth from "./EditDateofBirth"
import EditGender from "./EditGender"
import Options from "./Options"
import PhoneEmail from "./PhoneEmail"
import { SIDEINFO } from "../../../graphql/query/accoutinfo"
import { useQuery } from "@apollo/client"
import { Helmet } from 'react-helmet-async';

export const AContext= createContext()
const AccountPage = (props) => {
    const { error, data }= useQuery(SIDEINFO, {variables: {id_user: props.id_user}})
    const [user, setUser]= useState(()=> [])
    const [loading, setLoading]= useState(()=> false)
    const [login, setLogin]= useState(()=> false)
    const [address, setAddress]= useState(()=> "")
    const [specificLocation, setSpecificLocation]= useState(()=> "")
    const [oe, setOe]= useState(()=> false)
    const dispatch= useDispatch()
    useEffect(()=> {
        (async()=> {
            try {
                const res= await axios({
                    url: "http://localhost:8000/l/",
                    method: "post",
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
                    maxRedirects: 100,
                    maxContentLength: 100000,
                    responseType: 'json',
                    responseEncoding: 'binary'

                })
                const result= await res?.data
                if(result.login=== "false") {
                    return setLogin(()=> false)
                }
                else {
                    setLogin(()=> true)
                    setUser(()=> result[0][0])
                }
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])
    const [option, setOption] = useState({
        dashboard: true,
        address: false,
    })
    const [gender, setGender] = useState(1);

    const handleGenderChange = (event) => {
        setGender(event.target.value)
    };
    const [born, setBorn]= useState(()=> ({
        date: "",
        month: "",
        year: ""
    }))
    function handleChangeBirthDate(e) {
        setBorn(prev=> ({...prev, date: e.target.value}))
    }
    function handleChangeMonthDate(e) {
        setBorn(prev=> ({...prev, month: e.target.value}))
    }
    function handleChangeYearDate(e) {
        setBorn(prev=> ({...prev, year: e.target.value}))
    }
    const [name, setName]= useState(()=> data?.user[0].fullname)

    if(login=== true ) {
        return (
            <Fragment>
                <Helmet>
                    <title>{`${user?.firstname} ${user?.lastname}`}</title>
                </Helmet>
                <AContext.Provider value={{ avt_user: user?.avt_user, firstname: user?.firstname, lastname: user?.lastname, email: user?.email }}>
                    <div className="AcountPage">
                        <div className="AcountPage__banner" style={{backgroundColor: '#767676', color: '#fff', textTransform: 'uppercase',fontSize: 20,textAlign: 'center', verticalAlign: 'middle', lineHeight: 7.5}}>my account</div>
                        <div className="AccountPage__content">
                            <Options setOption={setOption} {...option} setLoading={setLoading} id_user={props.id_user} setAddress={setAddress} setSpecificLocation={setSpecificLocation} dispatch={dispatch} />
                            {
                                option.dashboard=== true &&
                                <div className="AccountPage__content--right">
                                    <p> 
                                        {console.log(data)}
                                        Hello{" "}
                                        <span style={{ fontWeight: "bold", textTransform: 'capitalize' }}>{user.lastname} {user.firstname}</span>
                                        (not{" "}
                                        <span style={{ fontWeight: "bold" , textTransform: 'capitalize'}}>{user.lastname} {user.firstname}</span>
                                        ? <span onClick={()=> logout(setLoading)} className="lq1">Log out</span>)
                                    </p>
                                    <br />
                                    <A2 avt_user={user.avt_user} />
                                    <div>
                                        <br />
                                        <div>Name</div>
                                        <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                        >
                                            <TextField id="outlined-basic" label="Name" variant="outlined" value={name} />
                                        </Box>
                                    </div>
                                    <br />
                                    <PhoneEmail data={data?.user[0]} user={user} />
                                    <br />
                                    <div className="lt1" style={{display: "flex", flexDirection: "column", gap: 10}}>
                                    <EditGender data={data?.user[0]} handleGenderChange={handleGenderChange} gender={gender} />       
                                            <br />
                                    </div>
                                    <br />
                                        <EditDateofBirth data={data?.user[0]} {...born} handleChangeBirthDate={handleChangeBirthDate} handleChangeMonthDate={handleChangeMonthDate} handleChangeYearDate={handleChangeYearDate} />    
                                        <br />
                                        <br />   
                                        <Button variant="contained">Save</Button>
                                </div>
                            }
                           
                            {
                                option.address=== true &&
                                <AddressInfo data={data?.user[0]} user={user} address={address} setOe={setOe} oe={oe} specificLocation={specificLocation} id_user={props.id_user} setAddress={setAddress} setSpecificLocation={setSpecificLocation} />
                            }
                        </div>
                    </div>
                    {
                        loading=== true && <LoadingSuspense />
                    }
                </AContext.Provider>
            </Fragment>
        )
    }
    else {
        return (
            <LogedOut />
        )
    }
}
export default AccountPage
