import "./AccountPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const AcountPage = () => {
    const [option, setOption] = useState({
        dashboard: true,
        address: false,
    });
    return (
        <div className="AcountPage">
            <div className="AcountPage__banner"></div>
            <div className="AccountPage__content">
                <div className="AccountPage__content--left">
                    <p
                        className="AccountPage__options"
                        onClick={() =>
                            setOption((state) => ({
                                ...!state,
                                dashboard: true,
                            }))
                        }
                        style={{
                            background: option.dashboard ? "gray" : "white",
                        }}
                    >
                        Dashboard
                    </p>
                    <p
                        className="AccountPage__options"
                        onClick={() =>
                            setOption((state) => ({
                                ...!state,
                                address: true,
                            }))
                        }
                        style={{
                            background: option.address ? "gray" : "white",
                        }}
                    >
                        Addresses
                    </p>

                    <Link to="/favorite">
                        <p className="AccountPage__options">Wishlist</p>
                    </Link>
                    <p className="AccountPage__options">Logout</p>
                </div>
                <div className="AccountPage__content--right">
                    <p>
                        Hello{" "}
                        <span style={{ fontWeight: "bold" }}>shief hermer</span>
                        (not{" "}
                        <span style={{ fontWeight: "bold" }}>shief hermer</span>
                        ? <span>Log out</span>)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AcountPage;
