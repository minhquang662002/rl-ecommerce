
import React, { createContext, useState } from 'react'

const MyContext= createContext()
const ContextContainer = ({children}) => {
  const [state, setState]= useState({
      allImages: [],
      id_product: "",
      dataShoppingCart : [],
      inspirationProduct: []
  })
  const setListImage= (list)=> {
    setState(prev=> ({...prev, allImages: list}))
  }
  const setIdProduct= (id_product)=> {
    setState(prev=> ({...prev, id_product: id_product}))
  }
  const setDataShoppingCart= (data)=> {
    setState(prev=> ({...prev, dataShoppingCart: data}))
  }
  const setInspirationProduct= (data)=> {
    setState(prev=> ({...prev, inspirationProduct: data}))
  }
  return (
    <MyContext.Provider value={{setListImage, allImages: state.allImages, setIdProduct, id_product: state.id_product, setDataShoppingCart, dataShoppingCart: state.dataShoppingCart, setInspirationProduct, inspirationProduct: state.inspirationProduct}}>
        {children}
    </MyContext.Provider>
  )
}

export { ContextContainer, MyContext }