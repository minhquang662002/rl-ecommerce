import { createContext, useState } from "react"

const NavContext = createContext()

const ContextProvider = ({ children }) => {
    const [navChoices, setNavChoices] = useState({
        search: false,
        login: false,
        register: false,
        cart: false,
        quickViewData: false,
        quickShopData: false,
        setting: false,
    })
    const setNavChoices2= ()=> {
        setNavChoices(prev=> ({...!prev}))
    }
    
    return (
        <NavContext.Provider
            value={{
                navChoices,
                setNavChoices,
                setNavChoices2
            }}
        >
            {children}
        </NavContext.Provider>
    )
}

export { ContextProvider, NavContext }
