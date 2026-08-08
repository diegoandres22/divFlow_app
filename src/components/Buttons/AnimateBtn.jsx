import "./revbtn.css";
import { smoothScrollTo } from "../../lib/smoothScroll";

const AnimateBtn = ({ btnName, href = "#" }) => {
    const isInPageAnchor = href.startsWith("#") && href.length > 1;

    const handleClick = (e) => {
        if (!isInPageAnchor) return;
        e.preventDefault();
        smoothScrollTo(href);
    };

    return (
        <div className="link-line">
            <a href={href} onClick={handleClick} className="rev-link rev-top text-[12px]">{btnName}</a>
            <a href={href} onClick={handleClick} className="rev-link text-[12px]">{btnName}</a>
        </div>
    )
}

export default AnimateBtn