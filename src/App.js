import './App.css';
import AppRouter from './router/router';
import ReactGA from 'react-ga';
ReactGA.initialize({ trackingId: process.env.googleTrackingId });

function App() {
  return (
    <div className="App">
     <AppRouter />
    </div>
  );
}

export default App;
