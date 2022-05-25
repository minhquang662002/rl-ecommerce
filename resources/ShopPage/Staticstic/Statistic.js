import React from 'react'
import AccessTimes from './AccessTimes'
import ConversionRate from './ConversionRate'
import Orders from './Orders'
import Revenue from './Revenue'
import RevenuePerOrder from './RevenuePerOrder'

const Statistic = (props) => {
  return (
    <div className='sfdsdfadsa' style={{width: "100%", display: "flex", justifyContent: "center", alignItems: 'center', padding: 10, height: 150}}>
        <Revenue 
          staticstic1={props.data?.staticstic?.slice(0, 29)} 
          staticstic2={props.data?.staticstic?.slice(29, 60)} 
          dataset1={props.dataset1} dataset2={props.dataset2} 
          setdataset1={props.setdataset1} 
          setdataset2={props.setdataset2} 
          setchart={props.setchart1}
        />
        <Orders 
          staticstic1={props.data?.staticstic?.slice(0, 29)} 
          staticstic2={props.data?.staticstic?.slice(29, 60)} 
          dataset1={props.dataset1} dataset2={props.dataset2} 
          setdataset1={props.setdataset1} 
          setdataset2={props.setdataset2} 
          setchart={props.setchart2}
        />
        <ConversionRate 
          staticstic1={props.data?.staticstic?.slice(0, 29)} 
          staticstic2={props.data?.staticstic?.slice(29, 60)} 
          dataset1={props.dataset1} dataset2={props.dataset2} 
          setdataset1={props.setdataset1} 
          setdataset2={props.setdataset2} 
          setchart={props.setchart3}
        />
        <RevenuePerOrder 
          staticstic1={props.data?.staticstic?.slice(0, 29)} 
          staticstic2={props.data?.staticstic?.slice(29, 60)} 
          dataset1={props.dataset1} dataset2={props.dataset2} 
          setdataset1={props.setdataset1} 
          setdataset2={props.setdataset2} 
          setchart={props.setchart4}
        />
        <AccessTimes 
          staticstic1={props.data?.staticstic?.slice(0, 29)} 
          staticstic2={props.data?.staticstic?.slice(29, 60)} 
          dataset1={props.dataset1} dataset2={props.dataset2} 
          setdataset1={props.setdataset1} 
          setdataset2={props.setdataset2} 
          setchart={props.setchart5}
        />
    </div>
  )
}

export default Statistic