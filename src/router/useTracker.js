import React,{useEffect,useState} from "react";
import { useLocation } from "react-router-dom";
import ReactGA from 'react-ga';

const useGaTracker = () => {
    const location = useLocation();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
            ReactGA.initialize({ trackingId: process.env.googleTrackingId });
            // ReactGA.initialize(process.env.googleTrackingId);
        }
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (initialized) {
        ReactGA.pageview(location.pathname + location.search);
        }
    }, [initialized, location]);
};

export default useGaTracker;