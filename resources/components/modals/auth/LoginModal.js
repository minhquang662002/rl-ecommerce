import CloseIcon from "@mui/icons-material/Close"
import { useContext, useState } from "react"
import { login } from "../../../action/login"
import { NavContext } from "../../context/NavContext"
import { useNavigate } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress'


const LoginModal = ({ navChoices, setNavChoices }) => {
    const [user, setUser]= useState(()=> ({
        email: "",
        password: "",
    }))
    const navigate= useNavigate()
    const { setNavChoices2 }= useContext(NavContext)
    const [log, setLog]= useState(()=> false)
    const [logged, setLogged]= useState(()=> false)
    const [loading, setLoading]= useState(()=> false)
    const [checkUser, setCheckUser]= useState(()=> undefined)
    return (
        <div
            className="LoginModal"
            style={{
                transform: navChoices.login
                    ? "translateX(0)"
                    : "translateX(100%)",
            }}
        >
            <div className="NavModal__header">
                <p>LOGIN</p>
                <span
                    className="NavModal__close--button"
                    onClick={() => setNavChoices((state) => !state)}
                >
                    <CloseIcon />
                </span>
            </div>
            <div className="LoginModal__body">
                <div className="LoginModal__form">
                    <span htmlFor="email">Email:</span>
                    <input type="email" required={true} onChange={(e)=> setUser(prev=> ({...prev, email: e.target.value}))} value={user.email} autoComplete="off" />
                    <span htmlFor="password">Password: </span>
                    <input type="password" required={true} onChange={(e)=> setUser(prev=> ({...prev, password: e.target.value}))} value={user.password} autoComplete="off" />
                    <button className="LoginModal__form--button" type="submit" onClick={()=> login(user, setLog, setNavChoices2, navigate, setLogged, setLoading, setCheckUser)}>
                        {
                            loading=== false ? "SIGN IN" : <CircularProgress style={{width: 12, height: 12}} color="secondary" />
                        }
                    </button>
                    {
                        checkUser=== false && <div style={{color: "red", paddingTop: 10}}>Email or password are incorrect.</div>
                    }
                </div>
                <div className="LoginModal__other">
                    <p>
                        New customer?{" "}
                        <span
                            style={{ color: "black", cursor: "pointer" }}
                            onClick={() =>
                                setNavChoices((state) => ({
                                    ...state,
                                    register: true,
                                    login: false,
                                }))
                            }
                        >
                            Create your account
                        </span>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default LoginModal
