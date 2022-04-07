import "./MainPage.css";
import Carousel from "../../carousel/Carousel";
import MainCategories from "./MainCategories";
import MainPageSection from "./MainPageSection";
import BannerSection from "./banners/BannerSection";

const MainPage = () => {
    return (
        <div className="MainPage">
            <Carousel />
            <div className="MainPage__body">
                <MainCategories />
                <MainPageSection section={"trending"} />
                <BannerSection />
                <MainPageSection section={"best seller"} />
            </div>
        </div>
    );
};

export default MainPage;
