import CloseIcon from "@mui/icons-material/Close";

const LoginModal = ({ navChoices, setNavChoices }) => {
    return (
        <div
            className="LoginModal"
            style={{
                transform: navChoices.login
                    ? "translateX(0)"
                    : "translateX(100%)",
            }}
        >
            <div className="NavModal__header">
                <p>LOGIN</p>
                <span
                    className="NavModal__close--button"
                    onClick={() => setNavChoices((state) => !state)}
                >
                    <CloseIcon />
                </span>
            </div>
            <div className="LoginModal__body">
                <form className="LoginModal__form">
                    <label htmlFor="email">Email:</label>
                    <input type="email" required name="email" />
                    <label htmlFor="password">Password: </label>
                    <input type="password" required name="password" />
                    <button className="LoginModal__form--button" type="submit">
                        SIGN IN
                    </button>
                </form>
                <div className="LoginModal__other">
                    <p>
                        New customer?{" "}
                        <span
                            style={{ color: "black", cursor: "pointer" }}
                            onClick={() =>
                                setNavChoices((state) => ({
                                    ...state,
                                    register: true,
                                    login: false,
                                }))
                            }
                        >
                            Create your account
                        </span>
                    </p>
                    <p>
                        Lost password?{" "}
                        <span style={{ color: "black", cursor: "pointer" }}>
                            Recover password
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
