import './App.css';
import AppRouter from './router/router';
import {useLocation} from 'react-router-dom';
import React from "react";
import useGaTracker from './router/useTracker';
import { GA_TRACKING_ID, initGA } from '../src/config/GoogleAnalytics'
window.dataLayer = window.dataLayer || [];

function App() {
  
  let location = useLocation();
  // console.log('hash', location.hash);
  // console.log('pathname', location.pathname);
  // console.log('search', location.search);
  // console.log('location', location);
  React.useEffect(() => {
    window.gtag('config', GA_TRACKING_ID, {
      'page_title': location.pathname,
      'page_path': location.pathname
  })
    // ReactGA.pageview(location.pathname);
   
    // ReactGA.set({ page: location.pathname });
    // ReactGA.pageview(location.pathname)
    // ReactGA.ga('send', 'pageview', location.pathname);

  }, [location]);
  initGA();

  return (
    <div className="App">
     <AppRouter />
    </div>
  );
}

export default App;
