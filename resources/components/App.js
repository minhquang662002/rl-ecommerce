import Navbar from "./navbar/Navbar";
import CartModal from "./modals/cart/CartModal";
import SearchModal from "./modals/search/SearchModal";
import Layout from "./modals/Layout";
import AuthModal from "./modals/auth/AuthModal";
import MainPage from "./page/main/MainPage";

function App() {
    return (
        <div>
            <Navbar />
            <MainPage />
            <Layout>
                <SearchModal />
                <CartModal />
                <AuthModal />
            </Layout>
        </div>
    );
}

export default App;
