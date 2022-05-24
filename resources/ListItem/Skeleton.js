import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import "./Skeleton.sass"

const SkeletonLoading = () => {
  return (
    <div className="mp-1">
        <Skeleton variant="rectangular" width="100%" height={350} />
        <div style={{margin: 5}}></div>
        <Skeleton variant="rectangular" width="80%" height={20} />
        <div style={{margin: 5}}></div>
        <Skeleton variant="rectangular" width={45} height={16} />
        <div style={{margin: 5}}></div>
        <div className="mp-92">
            <Skeleton variant="circular" width={20} height={20} />
            <Skeleton variant="circular" width={20} height={20} />
            <Skeleton variant="circular" width={20} height={20} />
        </div>
    </div>
  )
}

export default SkeletonLoading