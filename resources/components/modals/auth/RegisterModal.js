import CloseIcon from "@mui/icons-material/Close";

const RegisterModal = ({ navChoices, setNavChoices }) => {
    return (
        <div
            className="RegisterModal"
            style={{
                transform: navChoices.register
                    ? "translateX(0)"
                    : "translateX(100%)",
            }}
        >
            <div className="NavModal__header">
                <p>REGISTER</p>
                <span
                    className="NavModal__close--button"
                    onClick={() => setNavChoices((state) => !state)}
                >
                    <CloseIcon />
                </span>
            </div>
            <div className="RegisterModal__body">
                <form className="RegisterModal__form">
                    <label htmlFor="firstname">First name: </label>
                    <input type="text" name="firstname" />
                    <label htmlFor="lastname">Last name: </label>
                    <input type="text" name="lastname" />
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" required />
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" required />
                    <label htmlFor="confirm__password">
                        Confirm password:{" "}
                    </label>
                    <input type="password" name="confirm__password" required />
                    <button
                        className="RegisterModal__form--button"
                        type="submit"
                    >
                        REGISTER
                    </button>
                </form>
                <div className="RegisterModal__other">
                    <p>
                        Already have an account?{" "}
                        <span
                            style={{ color: "black", cursor: "pointer" }}
                            onClick={() =>
                                setNavChoices((state) => ({
                                    ...state,
                                    register: false,
                                    login: true,
                                }))
                            }
                        >
                            Login here
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;
