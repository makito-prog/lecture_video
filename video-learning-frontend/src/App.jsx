import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import UploadLecture from './components/UpLoadLecture';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/upload" element={<UploadLecture />} />
      </Routes>
    </Router>
  );
}

export default App;
