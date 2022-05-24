
import React, { createContext, useState } from 'react'

const MyContext= createContext()
const ContextContainer = ({children}) => {
  const [state, setState]= useState({
      allImages: [],
      id_product: "",
      dataShoppingCart : [],
      inspirationProduct: [],
      lengthFavorite: "_",
      lengthShopping: "_",
      odsc: false
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
  const setLengthFavorite= (data)=> {
    setState(prev=> ({...prev, lengthFavorite: data}))
  }
  const setLengthShopping= (data)=> {
    setState(prev=> ({...prev, lengthShopping: data}))
  }
  return (
    <MyContext.Provider value={{setListImage, allImages: state.allImages, setIdProduct, id_product: state.id_product, setDataShoppingCart, dataShoppingCart: state.dataShoppingCart, setInspirationProduct, inspirationProduct: state.inspirationProduct,
      setLengthFavorite,setLengthShopping, lengthFavorite: state.lengthFavorite, lengthShopping: state.lengthShopping
    }}>
        {children}
    </MyContext.Provider>
  )
}

export { ContextContainer, MyContext }