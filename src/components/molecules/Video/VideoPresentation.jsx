import { ReelFooter } from "@/components/atoms/ReelFooter/ReelFooter";
import "./Video.css";

export default function VideoPresentation({
    videoRef,
    url,
    caption,
    onVideoClick
}) {
    return (
        <div className="video-wrapper">
            <video 
                className="video-player" 
                loop
                onClick={onVideoClick}
                ref={videoRef}
                src={url}>
            </video>

            <div className="bottom">
                <ReelFooter 
                    channel={"issanketsingh"} 
                    caption={caption} 
                />
            </div>
        </div>
    );
}