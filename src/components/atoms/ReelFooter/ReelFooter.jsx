import { useState } from "react"
import { Heart, MessageCircle, Send, MoreHorizontal, Camera } from "lucide-react"
import "./ReelFooter.css"

export const ReelFooter = ({ channel, caption, likes = 0 }) => {
  const [isFollowing, setIsFollowing] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)
  const [isLiked, setIsLiked] = useState(false)

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setIsLiked(!isLiked)
  }

  return (
    <>
      <div className="reel-header">
        <h2>Reels</h2>
        <button className="camera-button">
          <Camera className="text-white" size={24} />
        </button>
      </div>
      <div className="reel-footer">
        <div className="reel-footer-left">
          <div className="reel-footer-top">
            <h3>@{channel}</h3>
            <button className={`follow-button ${isFollowing ? "following" : ""}`} onClick={handleFollow}>
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>
          <div className="reel-footer-bottom">
            <p>{caption}</p>
          </div>
        </div>
        <div className="reel-footer-right">
          <div className="action-button">
            <button onClick={handleLike}>
              <Heart className={isLiked ? "liked" : ""} size={26} />
            </button>
            <span className="icon-label">{likeCount}</span>
          </div>
          <div className="action-button">
            <button>
              <MessageCircle size={26} />
            </button>
            <span className="icon-label">0</span>
          </div>
          <div className="action-button">
            <button>
              <Send size={26} />
            </button>
          </div>
          <div className="action-button">
            <button>
              <MoreHorizontal size={26} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}