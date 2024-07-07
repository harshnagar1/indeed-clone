import React from 'react';
import Header from '../compoonent/Header';
import { Box, styled, Typography, Button } from '@mui/material';
import { routepath } from '../routes/route';
import { useNavigate } from 'react-router-dom';

const Component = styled(Box)({
  display: 'flex',
  margin: '0 150px',
  height: '100vh',
  alignItems: 'center',
  '& > div': {
    display: 'flex',
    width: '50%',
    justifycontent: 'center',
    flexDirection: 'column',
    '& > p': {
      fontSize: 35,
      linHeight: 1.25,
      letterSpacing: -1,
    },
    ' & > button': {
      width: 120,
      height: 40,
      backgroundColor: 'rgb(25,86,95)',
      textTransform: 'none',
      fontWight: 700,
      fontSize: 14,
      marginTop: 48,
    },
  },
});
const Home = () => {
  const navigate = useNavigate();

  const animatedImage =
    'https://images.ctfassets.net/pdf29us7flmy/5r34jiS1YfJuoRzqp3XH6y/6fba6547e16cd0ad08ae28dad306015d/Screen_Shot_2023-01-11_at_9.21.31_AM.png?w=720&q=100&fm=avif';

  return (
    <div>
      <Header />
      <Component>
        <Box>
          <Typography>Let's make your next great hire .Fast</Typography>
          <Button
            variant="contained"
            onClick={() => navigate(routepath.create)}
          >
            post a job
          </Button>
        </Box>
        <Box>
          <img src={animatedImage} alt="homeimage" style={{ width: 400 }} />
        </Box>
      </Component>
    </div>
  );
};
export default Home;
