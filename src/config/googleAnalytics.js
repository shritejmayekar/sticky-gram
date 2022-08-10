


export const GA_TRACKING_ID = process.env.GOOGLE_ANALYTICS_TRACKING_ID

export const initGA = () => {
    window.gtag('config', GA_TRACKING_ID, {
    })
};


export const PageView = (url) => {


    window.gtag('send', GA_TRACKING_ID, {
        'page_title': url,
        'page_path': url
    })
}


// https://developers.google.com/analytics/devguides/collection/gtagjs/pages


// https://developers.google.com/analytics/devguides/collection/gtagjs/events
