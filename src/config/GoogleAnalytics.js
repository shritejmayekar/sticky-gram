


export const GA_TRACKING_ID = 'UA-179100877-1'

export const initGA = () => {
    // console.log("in init");
    window.gtag('config', GA_TRACKING_ID, {
    })


};


export const PageView = (url) => {
    // console.log("value of path ", url);

    window.gtag('send', GA_TRACKING_ID, {
        'page_title': url,
        'page_path': url
    })
}

// export const setEvent = (category, action, label) => {
//     ReactGA.event({
//         category,
//         action,
//         label
//     });
// };



// https://developers.google.com/analytics/devguides/collection/gtagjs/pages


// https://developers.google.com/analytics/devguides/collection/gtagjs/events
