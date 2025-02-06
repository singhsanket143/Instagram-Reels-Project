import { useEffect, useRef } from "react";
import VideoPresentation from "./VideoPresentation";

export default function VideoContainer({
    id,
    url,
    caption,
    playing, 
    setPlaying
}) {
    const videoRef = useRef(null);

    const handleVideoClick = () => {
        if(videoRef.current.paused) {
            videoRef.current.play();  
            setPlaying(id);
        } else {
            videoRef.current.pause();
            setPlaying(null);
        }
    }

    useEffect(() => {
        if (playing !== id) {
            videoRef.current.pause();
        } 
    }, [playing, id]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    videoRef.current.play();
                    setPlaying(id);
                }
            });
        }, {
            threshold: 0.5
        });

        if(videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if(videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        }
    }, [id, setPlaying]);

    const videoProps = {
        videoRef,
        url,
        caption,
        onVideoClick: handleVideoClick
    };

    return <VideoPresentation {...videoProps} />;
}