import { useEffect } from "react";

const DEFAULT_TITLE = "DivFlow — Software a medida y automatizaciones con n8n";
const DEFAULT_DESCRIPTION =
    "DivFlow: software SaaS a medida y automatizaciones con n8n para que tu negocio fluya sin fricción.";

// Lightweight per-route <title>/<meta description> without adding a
// react-helmet dependency — this is a client-only SPA (no SSR), so a plain
// useEffect is enough. Cleanup restores the previous values on unmount, so
// navigating back to "/" (or between legal pages) always ends up correct.
export function useDocumentMeta(title, description) {
    useEffect(() => {
        document.title = title || DEFAULT_TITLE;

        let meta = document.querySelector('meta[name="description"]');
        if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute("name", "description");
            document.head.appendChild(meta);
        }
        const previousContent = meta.getAttribute("content");
        meta.setAttribute("content", description || DEFAULT_DESCRIPTION);

        return () => {
            document.title = DEFAULT_TITLE;
            meta.setAttribute("content", previousContent ?? DEFAULT_DESCRIPTION);
        };
    }, [title, description]);
}
