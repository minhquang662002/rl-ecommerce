import React, { useEffect, useState } from 'react'
import Overview from '../Overview'
import { ChartStaticstic } from './ChartStaticstic/ChartStaticstic'
import { useQuery } from '@apollo/client/react'
import { STATICSTIC } from '../../graphql/query/staticstic'
import moment from 'moment'

const ContainerStaticstic = (props) => {
  const { data, error, loading }= useQuery(STATICSTIC, {
      variables: {
        id_user: props.id_user,
        id_shop: props.id_shop
      }
  })
  const [chart1, setchart1]= useState(()=> ({
    label: "Revenue",
    column: "revenue",
    borderColor: "rgb(46, 137, 255)",
    backgroundColor: "rgb(46, 137, 255, 0.5)"
  }))
  const [chart2, setchart2]= useState(()=> ({
    label: "Orders",
    column: null,
    borderColor: "rgb(66, 234, 49)",
    backgroundColor: "rgb(66, 234, 49, 0.5)"
  }))
  const [chart3, setchart3]= useState(()=> ({
    label: "Conversion rate",
    column: null,
    column2: null,
    borderColor: "rgb(0, 232, 255)",
    backgroundColor: "rgb(0, 232, 255, 0.5)"
  }))
  const [chart4, setchart4]= useState(()=> ({
    label: "Revenue / order",
    column: null,
    column2: null,
    borderColor: "rgb(250, 68, 250)",
    backgroundColor: "rgb(250, 68, 250,0.5)"
  }))
  const [chart5 , setchart5]= useState(()=> ({
    label: "Access times",
    column: "access_times",
    borderColor: "rgb(255, 165, 0)",
    backgroundColor: "rgb(255, 165, 0, 0.5)"
  }))
  return (
    <>
    <ChartStaticstic datasets=
        {
            [
                {
                    label: chart1.label || null,
                    data: data?.staticstic?.slice(0, 30)?.map(item=> item[`${chart1?.column?.replace(" ", "_")?.toLowerCase()}`])?.map((item) => item) || null,
                    borderColor: chart1.borderColor || null,
                    backgroundColor: chart1.backgroundColor || null,
                },
                {
                    label: chart2.label || null,
                    data: data?.staticstic?.slice(0, 30)?.map(item=> item[`${chart2?.column?.replace(" ", "_")?.toLowerCase()}`])?.map((item) => item) || null,
                    borderColor: chart2.borderColor || null,
                    backgroundColor: chart2.backgroundColor || null,
                },
                {
                    label: chart3.label || null,
                    data: data?.staticstic?.slice(0, 30)?.map(item=> (item[`${chart3?.column?.replace(" ", "_")?.toLowerCase()}`] / item[`${chart3?.column2?.replace(" ", "_")?.toLowerCase()}`]) * 100)?.map((item) => item) || null,
                    borderColor: chart3.borderColor || null,
                    backgroundColor: chart3.backgroundColor || null,
                },
                {
                    label: chart4.label || null,
                    data: data?.staticstic?.slice(0, 30)?.map(item=> (item[`${chart4?.column?.replace(" ", "_")?.toLowerCase()}`] / item[`${chart4?.column2?.replace(" ", "_")?.toLowerCase()}`]).toFixed(2))?.map((item) => item) || null,
                    borderColor: chart4.borderColor || null,
                    backgroundColor: chart4.backgroundColor || null,
                },
                {
                    label: chart5.label || null,
                    data: data?.staticstic?.slice(0, 30)?.map(item=> item[`${chart5?.column?.replace(" ", "_")?.toLowerCase()}`])?.map((item) => item) || null,
                    borderColor: chart5.borderColor || null,
                    backgroundColor: chart5.backgroundColor || null,
                }
            ]
        }   
        day={data?.staticstic?.slice(0, 30).map(item=> moment(parseInt(item.day)).format("DD/MM/YYYY")).reverse()}
        />

        <br />
        <Overview 
            data={data} 
            dataset1={props.dataset1} 
            dataset2={props.dataset2} 
            setdataset1={props.setdataset1} 
            setdataset2={props.setdataset2} 
            setchart1={setchart1}
            setchart2={setchart2}
            setchart3={setchart3}
            setchart4={setchart4}
            setchart5={setchart5}
        />
    </>

  )
}

export default ContainerStaticstic