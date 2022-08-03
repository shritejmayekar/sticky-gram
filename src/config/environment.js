import runtimeEnv from '@mars/heroku-js-runtime-env';
const env = runtimeEnv();

const myEnvironment = {
    apiUrl:env.REACT_APP_API,
    googleTrackingId:env.GOOGLE_ANALYTICS_TRACKING_ID
}

export default myEnvironment;