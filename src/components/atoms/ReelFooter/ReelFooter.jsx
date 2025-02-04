import "./ReelFooter.css";

export const ReelFooter = ({
    channel, caption
}) => {

    return (
        <div
            className="reel-footer-left"
        >
            <div
                className="reel-footer-text"
            >
                <h3>@{channel}</h3>
                <p>{caption}</p>

            </div>
        </div>
    )
}