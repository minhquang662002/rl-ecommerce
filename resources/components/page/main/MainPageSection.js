import Product from "./Product";
import "./MainPageSection.css";
import { useState } from "react";
import LoadingSuspense from "../../loading/LoadingSuspense";
const MainPageSection = (props) => {
    const [max, setMax] = useState(8);
    if(props.data === undefined || props.data=== []) {
        return (
            <LoadingSuspense />
        );
    }
    else {
        return (
            <div className="MainPageSection">
                <p className="MainPageSection__title">{props.section}</p>
                <div className="MainPageSection__body">
                    {props.data?.slice(0, max).map((item, index) => {
                        return (
                            <Product key={index} item={item} section={props.section} />
                        );
                    })}
                </div>
                {max < 16 && (
                    <div
                        className="MainPageSection__loadmore--button"
                        onClick={() => setMax((state) => state + 8)}
                    >
                        Load More
                    </div>
                )}
            </div>
        )
    }
};

export default MainPageSection;
