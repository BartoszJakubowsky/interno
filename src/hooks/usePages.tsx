import { useContext } from "react";
import PagesContext from "@/context/PagesContext";
function usePages()
{
    return useContext(PagesContext);
}

export default usePages;