import './App.css';
import AppRouter from './router/router';
import ReactGA from 'react-ga';
import {useLocation} from 'react-router-dom';
import React from "react";
import useGaTracker from './router/useTracker';
// ReactGA.initialize({ trackingId: process.env.googleTrackingId });

function App() {
  // let location = useLocation();
  // console.log('hash', location.hash);
  // console.log('pathname', location.pathname);
  // console.log('search', location.search);
  // console.log('location', location);
  // React.useEffect(() => {
  //   console.log('in',window.location.pathname)
  //   ReactGA.pageview(location.pathname);
   
  //   // ReactGA.set({ page: location.pathname });
  //   // ReactGA.pageview(location.pathname)
  //   // ReactGA.ga('send', 'pageview', location.pathname);

  // }, [location]);
  useGaTracker();
  return (
    <div className="App">
     <AppRouter />
    </div>
  );
}

export default App;
