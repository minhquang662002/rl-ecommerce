import React, {useContext} from 'react'
import { ContextForUser } from './UserPage'

const NameUser = () => {
  const { firstname, lastname }= useContext(ContextForUser)
  return (
    <div className='f-name' style={{width: '100%', height: 40, display: 'flex', justifyContent: 'center',alignItems: 'center',}}>
        <div style={{fontSize: 18}}>{firstname} {lastname}</div>
    </div>
  )
}

export default NameUser