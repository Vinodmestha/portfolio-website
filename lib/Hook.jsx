import { useActiveSectionContext } from "@/context/active-section";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(SectionName, threshold = 0.75) {
    console.log(SectionName)
    const { ref, inView } = useInView({
        threshold,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        console.log(setActiveSection, timeOfLastClick)
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(SectionName);
            console.log(SectionName)
        }
    }, [inView, setActiveSection, timeOfLastClick, SectionName]);

    return {
        ref,
    };
}