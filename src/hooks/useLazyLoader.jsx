import { useEffect, useRef, useState } from "react";

const useLazyLoader = (thresh) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const[threshold]=useState(thresh||0.5)
 
    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    console.log("active")
                    observer.disconnect(); // load once
                }
            }, 
            {
                threshold:threshold
            }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
}
export default useLazyLoader