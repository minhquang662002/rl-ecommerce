import React from 'react'
import Statistic from './Staticstic/Statistic'

const Overview = (props) => {
  return (
    <div className='sdkpokeoqwwsa' style={{width: "100%", padding: 10, border: "1px solid #e4d5d5", borderRadius: 8, backgroundColor: "#fff"}}>
      <div style={{fontWeight: 600}}>Staticstics</div>
      <Statistic
        data={props.data}
        dataset1={props.dataset1}
        dataset2={props.dataset2}
        setdataset1={props.setdataset1}
        setdataset2={props.setdataset2}
        setchart1={props.setchart1}
        setchart2={props.setchart2}
        setchart3={props.setchart3}
        setchart4={props.setchart4}
        setchart5={props.setchart5}
      />
    </div>
  )
}

export default Overview