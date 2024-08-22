import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams(); // useParams フックを使って ID を取得
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/courses/${id}`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error('Error fetching the course details!', error);
        setError(error);
      });
  }, [id]); // id が変更されると再取得

  if (error) return <div>Error fetching the course details!</div>;

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h1>{course.title}</h1>
      <h2>Lectures:</h2>
      {course.lectures && course.lectures.length > 0 ? (
        <ul>
          {course.lectures.map(lecture => (
            <li key={lecture.id}>
              <h3>{lecture.title}</h3>
              {lecture.video_url ? (
                <video controls width="600">
                  <source src={lecture.video_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <p>No video available.</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No lectures available.</p>
      )}
    </div>
  );
};

export default CourseDetail;
