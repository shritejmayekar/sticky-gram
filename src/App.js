import './App.css';
import AppRouter from './router/router';
import ReactGA from 'react-ga';
import {useLocation} from 'react-router-dom';
import React from "react";
ReactGA.initialize({ trackingId: process.env.googleTrackingId });

function App() {
  const location = useLocation();
  console.log('hash', location.hash);
  console.log('pathname', location.pathname);
  console.log('search', location.search);
  console.log('location', location);
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location.pathname]);

  return (
    <div className="App">
     <AppRouter />
    </div>
  );
}

export default App;
