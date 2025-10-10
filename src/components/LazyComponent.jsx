import React, { useState, useEffect, useRef } from "react";

function LazyComponent({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // load only once
                }
            },
            { threshold: 0.1 } // triggers when 10% visible
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return <div ref={ref}>{isVisible ? children : null}</div>;
}

export default LazyComponent;
