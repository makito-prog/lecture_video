import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

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

  if (error) return <Typography color="error">Error fetching the course details!</Typography>;

  if (!course) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>
        {course.title}
      </Typography>
      <Typography variant="h4" gutterBottom>
        Lectures
      </Typography>
      {course.lectures && course.lectures.length > 0 ? (
        <Grid container spacing={3}>
          {course.lectures.map(lecture => (
            <Grid item xs={12} md={6} key={lecture.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {lecture.title}
                  </Typography>
                  {lecture.video_url ? (
                    <CardMedia
                      component="iframe"
                      src={lecture.video_url}
                      title={lecture.title}
                      sx={{ height: 315 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <Typography color="textSecondary">No video available.</Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No lectures available.</Typography>
      )}
    </Box>
  );
};

export default CourseDetail;
