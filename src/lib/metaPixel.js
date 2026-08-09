const PIXEL_ID = "1297243308977598";

// Re-implementation of Meta's official base pixel snippet as a plain ES
// module — functionally identical, but loads fbevents.js as a normal
// external <script src="..."> instead of an inline <script> block. That
// keeps our CSP's script-src free of 'unsafe-inline' (only
// https://connect.facebook.net needs to be allow-listed).
export function initMetaPixel() {
    if (window.fbq) return;

    const fbq = function (...args) {
        if (fbq.callMethod) fbq.callMethod.apply(fbq, args);
        else fbq.queue.push(args);
    };
    window.fbq = fbq;
    if (!window._fbq) window._fbq = fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    fbq("init", PIXEL_ID);
    fbq("track", "PageView");
}

// Fire a standard/custom Meta event — no-ops safely if the pixel was never
// initialized (e.g. the visitor rejected cookies).
export function trackMetaEvent(eventName, params) {
    if (window.fbq) window.fbq("track", eventName, params);
}
