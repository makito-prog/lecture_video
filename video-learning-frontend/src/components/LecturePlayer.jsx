import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LecturePlayer({ lectureId }) {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/lectures/${lectureId}`)
      .then(response => {
        setVideoUrl(response.data.video_url);
      })
      .catch(error => {
        console.error('Error fetching video URL:', error);
      });
  }, [lectureId]);

  return (
    <div>
      {videoUrl ? (
        <video controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default LecturePlayer;
