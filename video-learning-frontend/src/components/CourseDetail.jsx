import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';

const CourseDetail = () => {
  const { id } = useParams();
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
  }, [id]);

  if (error) return <Typography color="error">Error fetching the course details!</Typography>;
  if (!course) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ p: 3, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        {course.title}
      </Typography>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: '#555' }}>
        Lectures
      </Typography>
      {course.lectures && course.lectures.length > 0 ? (
        <Grid container spacing={4}>
          {course.lectures.map(lecture => (
            <Grid item xs={12} md={6} key={lecture.id}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {lecture.title}
                  </Typography>
                  {lecture.video_url ? (
                    <Typography>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        href={lecture.video_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        sx={{ textTransform: 'none', mt: 2 }}
                      >
                        Watch Video
                      </Button>
                    </Typography>
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
