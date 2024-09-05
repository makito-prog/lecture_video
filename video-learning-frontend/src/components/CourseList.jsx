import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, List, ListItem, ListItemText, Link, Card, CardContent, Divider } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/courses')
      .then(response => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the courses!', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) return <Typography color="error">Error fetching the courses!</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: 'primary.main' }}>
        Courses
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <List>
        {courses.map(course => (
          <Card
            key={course.id}
            sx={{
              mb: 2,
              boxShadow: 3,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': { transform: 'scale(1.02)' },
              maxWidth: '100%',
              margin: '0 auto'
            }}
          >
            <CardContent>
              <ListItem disablePadding>
                <ListItemText>
                  <Link
                    component={RouterLink}
                    to={`/courses/${course.id}`}
                    underline="hover"
                    color="primary"
                    variant="h6"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {course.title}
                  </Link>
                </ListItemText>
              </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </Box>
  );
};

export default CourseList;
