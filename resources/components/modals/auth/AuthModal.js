import "./AuthModal.css";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import { useContext } from "react";
import { NavContext } from "../../context/NavContext";
const AuthModal = () => {
    const { navChoices, setNavChoices } = useContext(NavContext);

    return (
        <div
            className="AuthModal"
            style={{
                transform:
                    navChoices.login || navChoices.register
                        ? "translateX(0)"
                        : "translateX(100%",
            }}
        >
            <LoginModal navChoices={navChoices} setNavChoices={setNavChoices} />

            <RegisterModal
                navChoices={navChoices}
                setNavChoices={setNavChoices}
            />
        </div>
    );
};

export default AuthModal;
