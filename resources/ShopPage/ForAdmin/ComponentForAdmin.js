import React from 'react'

const ComponentForAdmin = (props) => {
  
  return (
    <>
        {
        props.s== 1 && 
        <div style={{width: "100%", padding: 10, height: "auto", margin: 30, borderRadius: 10, border: "1px solid #e2e8f0"}}>
            <div style={{fontSize: 24, fontWeight: 600, color: "#000"}}>
                Hello World
            </div>
        </div>
        }
        
    </>
  )
}

export default ComponentForAdmin