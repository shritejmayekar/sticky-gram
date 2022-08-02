import ReactGA from "react-ga";
import environment from "../../config/environment";
const TRACKING_ID = environment.googleTrackingId; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
const useAnalyticsEventTracker = (category="Sticky note") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;