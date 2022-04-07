import { useContext, useState } from "react";
import { NavContext } from "../../context/NavContext";
import "./QuickViewModal.css";
import QuickViewModalRight from "./QuickViewModalRight";
import QuickViewModalLeft from "./QuickViewModalLeft";

const QuickViewModal = () => {
    const {
        navChoices: { quickViewData },
        setNavChoices,
    } = useContext(NavContext);
    const imageList = quickViewData?.color?.map((item) => item.images).flat();
    const [displayedImage, setDisplayedImage] = useState(
        imageList.indexOf(quickViewData?.currentImg)
    );

    const [displayedSize, setDiplayedSize] = useState(0);

    return (
        <div className="QuickViewModal">
            <QuickViewModalLeft
                quickViewData={quickViewData}
                displayedImage={displayedImage}
                setDisplayedImage={setDisplayedImage}
                imageList={imageList}
            />
            <QuickViewModalRight
                setNavChoices={setNavChoices}
                quickViewData={quickViewData}
                displayedSize={displayedSize}
                setDiplayedSize={setDiplayedSize}
                setDisplayedImage={setDisplayedImage}
                imageList={imageList}
                displayedImage={displayedImage}
            />
        </div>
    );
};

export default QuickViewModal;
