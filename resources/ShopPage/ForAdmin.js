import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import useQuery from '../ListItem/HookQuerySearch'
import ComponentForAdmin from './ForAdmin/ComponentForAdmin'
import "./fs.sass"

const ForAdmin = (props) => {
  const query= useQuery()
  const [s, sets]= useState(()=> 1)
  const l= useMemo(()=> ["Your product", "Products selled", "Revenue", "Sell product", "Order Request"])
  return (
    <>
      <div style={{width: "100%", display: 'flex', justifyContent: 'center',alignItems: "center"}}>
          <div className="fa-fs">
              {
                l?.map((item, key)=> <Link onClick={()=> {
                  sets(()=> parseInt(key) +1)
                  if(parseInt(key) + parseInt(1) == 1) {
                    props.myRef.current.scrollIntoView({behavior: "smooth",block: 'end', })
                  }
                  if(parseInt(key) + parseInt(1)== 4) {
                    props.myRef2.current.scrollIntoView({behavior: "smooth",block: 'start', })
                  }
                }} to={`/shop?id=${query.get("id")}&q=${parseInt(key) +1}`} key={key}><div className="iewsd" style={{width: '100%', display: 'flex', flex: "1 1 0", justifyContent: 'center',alignItems: "center", cursor: "pointer", height: '100%'}}>
                  {item}
                </div></Link>)
              }
          </div>
      </div>
      {
        <ComponentForAdmin {...props} s={s} />
      }
    </>
  )
}

export default ForAdmin 