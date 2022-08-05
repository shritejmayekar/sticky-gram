import './App.css';
import AppRouter from './router/router';
import ReactGA from 'react-ga';
import environment from './config/environment';
const TRACKING_ID = environment.googleTrackingId; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
     <AppRouter />
    </div>
  );
}

export default App;
