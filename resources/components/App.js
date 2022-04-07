import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import CartModal from "./modals/cart/CartModal";
import SearchModal from "./modals/search/SearchModal";
import Layout from "./modals/Layout";
import AuthModal from "./modals/auth/AuthModal";
import MainPage from "./page/main/MainPage";
import FavoritePage from "./page/favorite/FavoritePage";
import QuickViewModal from "./modals/quickview/QuickViewModal";
import QuickShopModal from "./modals/quickshop/QuickShopModal";
import DetailPage from "./page/detail/DetailPage";
import AcountPage from "./page/account/AcountPage";
import CollectionPage from "./page/collections/CollectionPage";
import { useContext } from "react";
import { NavContext } from "./context/NavContext";
import useScrollToTop from "../utils/useScrollToTop";

function App() {
    const {
        navChoices: { quickViewData, quickShopData },
    } = useContext(NavContext);
    useScrollToTop();
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/favorite" element={<FavoritePage />} />
                <Route
                    path="/collections/:section/products/:product"
                    element={<DetailPage />}
                />
                <Route
                    path="/collections/:section"
                    element={<CollectionPage />}
                />
                <Route path="/account" element={<AcountPage />} />
            </Routes>
            <Layout>
                <SearchModal />
                <CartModal />
                <AuthModal />
                {quickViewData && <QuickViewModal />}
                {quickShopData && <QuickShopModal />}
            </Layout>
        </div>
    );
}

export default App;
