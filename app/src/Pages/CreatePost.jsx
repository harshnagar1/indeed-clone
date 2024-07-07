import React, { useState } from 'react';
import Header from '../compoonent/Header';
import { styled, Typography, Box, TextField, Button } from '@mui/material';
import DropDown from '../compoonent/DropDown';
import { savePost } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { routepath } from '../routes/route';

const OuterBox = styled(Box)({
  padding: '80px 200px',
  background: '#f5f5f5',
});
const Container = styled(Box)({
  display: 'flex',
  background: '#FFFFFF',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 60px',
  borderRadius: '20px',
  '& > p': {
    fontWeight: 700,
    fontSize: 14,
    opacity: 0.7,
  },
});

const FormWraper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  background: '#FFFFFF',
  borderRadius: '20px',
  marginTop: 20,
  padding: 20,
  '& > *': {
    marginTop: '20px !important',
  },
});

const deafaultObj = {
  profile: '',
  type: '',
  description: '',
  experience: '',
  technology: [],
  salary: '',
};

const options = {
  type: ['online', 'offline', 'remote'],
  experience: ['0-2 years', '3-5 years', '5-8 years', '8 and more years'],
  technology: [
    'Java',
    'JavaScript',
    'C',
    'C++',
    'C#',
    'Ruby',
    'React.js',
    'Node.js',
    'HTML',
    'CSS',
    'R',
    'Docker',
    'Kubernetes',
    'AWS',
    'Python',
  ],
  salary: [
    'Rs 0-300000',
    'Rs 300000-500000',
    'Rs 500000-800000',
    'RS 800000-1300000',
    'Rs 1300000- more',
  ],
};

const CreatePost = () => {
  const [data, setdata] = useState(deafaultObj);

  const navigate = useNavigate();

  const image =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82';

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const saveJobs = async () => {
    if (data.profile) {
      await savePost(data);
      setdata(deafaultObj);
      navigate(routepath.posts);
      console.log('this navigates the ', navigate);
    } else {
      alert('Kindly fill all data');
    }
  };
  return (
    <>
      <Header />
      <OuterBox>
        <Container>
          <Typography>Create Job Post</Typography>
          <img src={image} alt="createImage" />
        </Container>

        <FormWraper>
          <TextField
            placeholder="Job Title"
            name="profile"
            onChange={handleChange}
          />

          <TextField
            placeholder="Job Description"
            name="description"
            onChange={handleChange}
          />
          <DropDown
            label="Job Type"
            id="job-type-label"
            value={data.type}
            handleChange={handleChange}
            name="type"
            options={options.type}
          />
          <DropDown
            name="experience"
            label="Experience"
            id="job-experience-label"
            value={data.experience}
            handleChange={handleChange}
            options={options.experience}
          />
          <DropDown
            name="technology"
            label="Technology"
            id="job-technology-label"
            value={data.technology}
            handleChange={handleChange}
            options={options.technology}
            multiple
          />
          <DropDown
            name="salary"
            label="Salary"
            id="job-salary-label"
            value={data.salary}
            handleChange={handleChange}
            options={options.salary}
          />
          <Button onClick={saveJobs} variant="contained">
            SAVE JOBS
          </Button>
        </FormWraper>
      </OuterBox>
    </>
  );
};

export default CreatePost;
