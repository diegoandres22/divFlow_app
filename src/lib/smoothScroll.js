import { ScrollSmoother } from "gsap/ScrollSmoother";

/**
 * Scrolls to an in-page anchor (e.g. "#contact") respecting GSAP's
 * ScrollSmoother virtual-scroll wrapper. Native `<a href="#id">` jumps
 * fight with ScrollSmoother (which drives scroll via a transform, not
 * real document scrollTop), causing an abrupt/broken jump instead of a
 * smooth animated scroll. This resolves the target through the active
 * smoother when available, falling back to native smooth scroll.
 */
export const smoothScrollTo = (target) => {
    if (!target) return;

    const smoother = ScrollSmoother.get();
    if (smoother) {
        smoother.scrollTo(target, true, "top top");
        return;
    }

    const el = typeof target === "string" ? document.querySelector(target) : target;
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
};
