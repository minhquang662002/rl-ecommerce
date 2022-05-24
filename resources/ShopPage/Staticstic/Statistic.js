import React from 'react'
import AccessTimes from './AccessTimes'
import ConversionRate from './ConversionRate'
import Orders from './Orders'
import Revenue from './Revenue'
import RevenuePerOrder from './RevenuePerOrder'

const Statistic = (props) => {
  return (
    <div className='sfdsdfadsa' style={{width: "100%", display: "flex", justifyContent: "center", alignItems: 'center', padding: 10, height: 150}}>
        <Revenue />
        <Orders />
        <ConversionRate />
        <RevenuePerOrder />
        <AccessTimes />
    </div>
  )
}

export default Statistic