import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react"
import { signup } from "../../../action/signup"
import ValidateError from "./ValidateError"
import  { useNavigate } from "react-router-dom"
const RegisterModal = ({ navChoices, setNavChoices }) => {
    const navigate= useNavigate()
    const [info ,setInfo]= useState(()=> ({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: ""
        
    }))
    const [err, setErr]= useState(()=> [])
    return (
        <div
            className="RegisterModal"
            style={{
                transform: navChoices.register
                    ? "translateX(0)"
                    : "translateX(100%)",
            }}
        >
            <div className="NavModal__header">
                <p>REGISTER</p>
                <span
                    className="NavModal__close--button"
                    onClick={() => setNavChoices((state) => !state)}
                >
                    <CloseIcon />
                </span>
            </div>
            <div className="RegisterModal__body">
                <div className="RegisterModal__form">
                    <label htmlFor="firstname">First name: </label>
                    <input type="text" name="firstname" onChange={(e)=> setInfo(prev=> ({...prev, firstname: e.target.value}))} value={info.firstname} />
                    {
                        err?.includes(2) && <ValidateError err="Firstname can't empty. Try again" />
                    }
                    {
                        err?.includes(1) && <ValidateError err="Firstname is invalid. Try again" />
                    }
                    <label htmlFor="lastname">Last name: </label>
                    <input type="text" name="lastname"  onChange={(e)=> setInfo(prev=> ({...prev, lastname: e.target.value}))} value={info.lastname} />
                    {
                        err?.includes(4) && <ValidateError err="Lastname can't empty. Try again" />
                    }
                    {
                        err?.includes(3) && <ValidateError err="Lastname is invalid. Try again" />
                    }
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" required  onChange={(e)=> setInfo(prev=> ({...prev, email: e.target.value}))} value={info.email} />
                    {
                        err?.includes(6) && <ValidateError err="Lastname can't empty. Try again" />
                    }
                    {
                        err?.includes(5) && <ValidateError err="Lastname is invalid. Try again" />
                    }
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" required onChange={(e)=> setInfo(prev=> ({...prev, password: e.target.value}))} value={info.password} />
                    {
                        err?.includes(7) && <ValidateError err="Password is invalid. Try again" />
                    }
                    <label htmlFor="confirm__password">
                        Confirm password:{" "}
                    </label>
                    <input type="password" name="confirm__password" required onChange={(e)=> setInfo(prev=> ({...prev, confirmpassword: e.target.value}))} value={info.confirmpassword} />
                    {
                        err?.includes(8) && <ValidateError err="Confirm password has error. Try again" />
                    }
                    <button
                        className="RegisterModal__form--button"
                        type="submit"
                        onClick={()=> signup(info, setErr, navigate, setNavChoices)}
                    >
                        REGISTER
                    </button>
                </div>
                <div className="RegisterModal__other">
                    <p>
                        Already have an account?{" "}
                        <span
                            style={{ color: "black", cursor: "pointer" }}
                            onClick={() =>
                                setNavChoices((state) => ({
                                    ...state,
                                    register: false,
                                    login: true,
                                }))
                            }
                        >
                            Login here
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterModal

