import { useEffect, useRef, useState } from "react";
import { Heart, Send, MessageCircle } from "lucide-react";
import "./Video.css";

export default function Video({
    id,
    url,
    caption,
    playing,
    setPlaying
}) {

    const videoRef = useRef(null); // Create a reference to the video element
    const [isLiked, setIsLiked] = useState(false);

    function handleClick() {
        if(videoRef.current.paused) {
            videoRef.current.play();
            setPlaying(id);
        } else {
            videoRef.current.pause();
            setPlaying(null);
        }
    }

    useEffect(() => {
        if(playing !== id) {
            videoRef.current.pause();
        }
    }, [playing]);

    return (
        <div
            className="video-wrapper">
            <video 
                className="video-player" 
                loop
                onClick={handleClick}
                ref={videoRef} 
                src={url}>
            </video>

            <div className="video-overlay">
              <div className="video-actions">
                 <button
                     onClick={() => setIsLiked(!isLiked)}
                     className={`action-button ${isLiked ? 'liked' : ''}`}
                 >
                    <Heart className={`action-icon ${isLiked ? 'text-red-500 fill-red-500' : 'text-white'}`}
                    />
                    <span className="action-count">100</span>
                 </button>
                 <button className="action-button">
                    <MessageCircle className="action-icon" />
                    <span className="action-count">40</span>
                 </button>
                 <button className="action-button">
                    <Send className="action-icon" />
                    <span className="action-count">20</span>
                 </button>
              </div>

              <div className="video-caption">
                <p className="caption-text">{caption}</p>
              </div>
            </div>
        </div>
    )
}