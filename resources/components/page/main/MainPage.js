import "./MainPage.css";
import Carousel from "../../carousel/Carousel";
import MainCategories from "./MainCategories";
import MainPageSection from "./MainPageSection";

const MainPage = () => {
    return (
        <div className="MainPage">
            <Carousel />
            <div className="MainPage__body">
                <MainCategories />
                <MainPageSection />
            </div>
        </div>
    );
};

export default MainPage;
