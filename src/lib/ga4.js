const MEASUREMENT_ID = "G-J85ZTHKWZ9";

// Loads gtag.js as an external script (keeps CSP script-src free of
// 'unsafe-inline', same approach as metaPixel.js) and initializes GA4.
export function initGA4() {
    if (window.gtag) return;

    window.dataLayer = window.dataLayer || [];
    function gtag(...args) {
        window.dataLayer.push(args);
    }
    window.gtag = gtag;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);

    gtag("js", new Date());
    gtag("config", MEASUREMENT_ID);
}

// Fire a custom GA4 event — no-op if GA4 was never initialized (e.g. the
// visitor rejected cookies).
export function trackGA4Event(eventName, params) {
    if (window.gtag) window.gtag("event", eventName, params);
}
