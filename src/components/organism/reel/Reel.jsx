import Video from "@/components/molecules/Video/VideoContainer";
import useFetchAllVideos from "@/hooks/apis/useFetchAllVideos";
import { useEffect, useState } from "react";
import "./Reel.css";
import VideoContainer from "@/components/molecules/Video/VideoContainer";

export const Reel = () => {
    const [playing, setPlaying] = useState(1);
    const [videosDownloaded, setVideosDownloaded] = useState([]);
  
    const { isVideoFetching, isVideoError, isVideoFetched, videos } = useFetchAllVideos();
  
    useEffect(() => {
      if(isVideoFetched && videos)
        setVideosDownloaded([...videos])
    }, [videos, isVideoFetched]);
  
    if(isVideoFetching) {
      return <div>Loading...</div>
    }
  
    if(isVideoError) {
      return <div>Error fetching videos</div>
    }
  
    return (
        <div className='app'>
            <div className="container">
            {isVideoFetched && videosDownloaded.map((currentVideo) => (
            <VideoContainer 
                url={currentVideo.url} 
                key={currentVideo.id} 
                id={currentVideo.id} 
                caption={currentVideo.caption} 
                playing={playing}
                setPlaying={setPlaying} 
                />
            ))}
            </div>
      </div>
    )
}