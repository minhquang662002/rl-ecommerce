import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Link } from "react-router-dom";
import "./PageFooter.css";

const PageFooter = () => {
    const footerList = {
        categories: ["men", "women", "accessories", "shoes", "denim", "dress"],
        information: [
            "about us",
            "contact us",
            "term & conditions",
            "returns & exchanges",
            "shipping & delivery",
            "privacy & policy",
            "open shopify store",
        ],
        useful_links: [
            "store location",
            "latest news",
            "my account",
            "size guide",
            "faqs 2",
            "faqs",
        ],
    };
    return (
        <div className="PageFooter">
            <div className="PageFooter__top--container">
                <div className="PageFooter__top">
                    <div className="Page__footer--information">
                        <h1>UNILIGHT</h1>
                        <p>
                            <LocationOnOutlinedIcon />
                            Bac Tu Liem, Hanoi, Vietnam
                        </p>
                        <p>
                            <EmailOutlinedIcon />
                            hauidev@company.com
                        </p>
                        <p>
                            <LocalPhoneOutlinedIcon />
                            +084 3912 764
                        </p>
                    </div>

                    {Object.keys(footerList).map((item, index) => {
                        return (
                            <div
                                className={`Page__footer--${item} Page__footer--cols`}
                                key={index}
                            >
                                <h2 className="Footer__cols--title">
                                    {item.replace("_", " ")}
                                </h2>
                                {footerList[item].map((cate, index) => (
                                    <Link to="/" key={index}>
                                        <p className="Footer__cols--items">
                                            {cate}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="PageFooter__bottom">
                <p>
                    © 2021 Ella Demo. Powered by <span>HaUI</span>.
                </p>
                <p>Blablabla</p>
            </div>
        </div>
    );
};

export default PageFooter;
