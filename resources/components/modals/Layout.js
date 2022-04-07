import "./Layout.css";
import { useContext } from "react";
import { NavContext } from "../context/NavContext";
const Layout = ({ children }) => {
    const { navChoices, setNavChoices } = useContext(NavContext);
    return (
        <div>
            <div
                className="Layout"
                style={{
                    visibility: Object.values(navChoices).some(
                        (el) => el !== false
                    )
                        ? "visible"
                        : "hidden",
                    opacity: Object.values(navChoices).some(
                        (el) => el !== false
                    )
                        ? "1"
                        : "0",
                }}
                onClick={() => {
                    setNavChoices((state) => !state);
                }}
            ></div>
            {children}
        </div>
    );
};

export default Layout;
