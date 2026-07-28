import "./revbtn.css";

const AnimateBtn = ({ btnName, href = "#" }) => {
    return (
        <div className="link-line">
            <a href={href} className="rev-link rev-top text-[12px]">{btnName}</a>
            <a href={href} className="rev-link text-[12px]">{btnName}</a>
        </div>
    )
}

export default AnimateBtn