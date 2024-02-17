import React, { useRef, useEffect, useState } from 'react';
import './VideoPlayer.css'; // Import CSS for styling

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Change the threshold as per your requirement
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVisible]);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src={src}
        className="video"
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default VideoPlayer;
