import { useState, useMemo } from "react";
import useWindowSize from "./windowSize.hook";

const useResizeGrid = () => {
    const [span, setSpan] = useState(6);
    const windowsSize = useWindowSize();

    const spanMemo = useMemo(() => {
        if (windowsSize.width < 640 && windowsSize.width > 500)
            setSpan(8);
        if (windowsSize.width < 500 && windowsSize.width > 360)
            setSpan(10);
        if (windowsSize.width < 360)
            setSpan(14);
    }, [windowsSize])
    return span;
}

export default useResizeGrid;