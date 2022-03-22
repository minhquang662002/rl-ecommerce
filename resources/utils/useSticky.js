import { useEffect, useState } from "react";

function useSticky(element) {
    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
        let prevScroll = window.scrollY;
        const showStick = (navHeight) => {
            if (prevScroll > window.scrollY && window.scrollY > navHeight) {
                setSticky(true);
            } else {
                setSticky(false);
            }
            prevScroll = window.scrollY;
        };
        const navHeight = element?.current.clientHeight;
        if (navHeight) {
            window.addEventListener("scroll", () => {
                showStick(navHeight);
            });
        }
    }, []);
    return isSticky;
}

export default useSticky;
