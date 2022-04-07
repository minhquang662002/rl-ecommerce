import { createContext, useState } from "react";

const NavContext = createContext();

const ContextProvider = ({ children }) => {
    const [navChoices, setNavChoices] = useState({
        search: false,
        login: false,
        register: false,
        cart: false,
        quickViewData: false,
        quickShopData: false,
    });

    return (
        <NavContext.Provider
            value={{
                navChoices,
                setNavChoices,
            }}
        >
            {children}
        </NavContext.Provider>
    );
};

export { ContextProvider, NavContext };
