import { useRef, useState } from "react"

import { ScrollContext, useScroll } from "./scrollContext.js"

const ScrollProvider = ({ children }) => {

    const [sections] = useState({
        home: useRef(null),
        services: useRef(null),
        contact: useRef(null),
        portfolio: useRef(null)
    })

    const scrollTo = (key) => {
        sections?.[key]?.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
    
    return (
        <ScrollContext.Provider value={{ sections, scrollTo }}>
            {children}
        </ScrollContext.Provider>

    )
}
export default ScrollProvider
