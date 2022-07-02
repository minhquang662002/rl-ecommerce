import React, { useEffect } from 'react'
import useQuery from '../ListItem/HookQuerySearch'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import NotFound404 from '../NotFound/NotFound404'
import axios from 'axios'
import { p_notifications } from '../firebase/online/push_notifacation'

const fakesleep= (ms)=> new Promise(rel=> setTimeout(rel, ms))
const PaymentSuccess = () => {
  const navigate= useNavigate()
  const query= useQuery()
  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: "http://localhost:8000/p/u/x",
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
          id_user: query.get("b")
        }
      })
      const result= await res.data
      if(query.get("query")== Cookies.get("se_pa")) {
        await p_notifications(query.get("i"), `${result[0].firstname} ${result[0].lastname}`, result[0].avt_user, " just purchased your item via online payment method", "", "")
        navigate("/order", {replace: true})
      }
    })()
  }, [])
  return (
    <>
      {
        (query.get("query")== Cookies.get("se_pa")) &&
        <div>PaymentSuccess</div>
      }
      {
        (query.get("query")!= Cookies.get("se_pa")) &&
        <NotFound404 />
      }
    </>
  )
}

export default PaymentSuccess
