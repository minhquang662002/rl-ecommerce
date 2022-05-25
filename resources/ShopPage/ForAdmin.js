import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import useQuery from '../ListItem/HookQuerySearch'
import "./fs.sass"

const ForAdmin = (props) => {
  const query= useQuery()
  const l= useMemo(()=> ["Your product", "Products selled", "Revenue", "Sell product"])
  return (
    <div style={{width: "100%", display: 'flex', justifyContent: 'center',alignItems: "center"}}>
        <div className="fa-fs">
            {
              l?.map((item, key)=> <Link to={`/shop?id=${query.get("id")}&q=${parseInt(key) +1}`} key={key}><div className="iewsd" style={{width: '100%', display: 'flex', flex: "1 1 0", justifyContent: 'center',alignItems: "center", cursor: "pointer", height: '100%'}}>
                  {item}
              </div></Link>)
            }
        </div>
    </div>
  )
}

export default ForAdmin 