import { useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'
import { createContext } from 'react'
import { feCo } from '../../../graphql/query/fetchcomment'

export const C1Context= createContext()
const C1 = (props) => {
  const [page, setPage]= useState(()=> 2)
  const [getMore, { loading, error, data }]= useLazyQuery(feCo, {
      variables: {id_comment: props.id_comment,  page: page }
  })
    
  return (
    <C1Context.Provider value={{loadingMore: loading, errorMore: error, dataMore: data, getMore, setPage}}>
        {props.children}
    </C1Context.Provider>
  )
}

export default C1