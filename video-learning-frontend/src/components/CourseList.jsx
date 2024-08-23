import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, List, ListItem, ListItemText, Link } from '@mui/material';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching the courses!', error);
        setError(error);
      });
  }, []);

  if (error) return <Typography color="error">Error fetching the courses!</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Courses
      </Typography>
      <List>
        {courses.map(course => (
          <ListItem key={course.id} disablePadding>
            <ListItemText>
              <Link component={RouterLink} to={`/courses/${course.id}`} underline="hover" color="primary" variant="body1">
                {course.title}
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CourseList;
