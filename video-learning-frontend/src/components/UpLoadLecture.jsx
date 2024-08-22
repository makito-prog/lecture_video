import React, { useState } from 'react';
import axios from 'axios';

function UploadLecture({ courseId }) {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('lecture[title]', title);
    formData.append('lecture[video]', file);
    formData.append('lecture[course_id]', courseId);

    try {
      const response = await axios.post('http://localhost:3000/api/v1/lectures', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Uploaded lecture:', response.data);
    } catch (error) {
      console.error('Error uploading lecture:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Lecture Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Lecture</button>
    </div>
  );
}

export default UploadLecture;
