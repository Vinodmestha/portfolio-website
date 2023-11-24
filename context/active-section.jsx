"use client";

// import { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

// const ActiveSectionContextProviderProps = {
//     children: React.ReactNode;
// };
// console.log(SectionName)
const ActiveSectionContextType = {
    activeSection: "",
    setActiveSection: "",
    timeOfLastClick: 0,
    setTimeOfLastClick: "",
};

export const ActiveSectionContext = createContext(ActiveSectionContextType);

export default function ActiveSectionContextProvider({
    children,
}) {
    const [activeSection, setActiveSection] = useState('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link
    console.log(activeSection, setActiveSection)
    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    console.log(context)

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return context;
}
