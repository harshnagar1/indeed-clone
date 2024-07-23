import React, { useEffect, useState } from 'react';
import Header from '../compoonent/Header';
import {
  Box,
  Card,
  CardContent,
  InputBase,
  ListItem,
  styled,
  Typography,
} from '@mui/material';
import { getAllPost } from '../services/api';

const SearchWraper = styled(Box)({
  display: 'flex',
  margin: 74,
  alingItem: 'center',
  justifyContent: 'center',
  '& > div': {
    width: '50%',
    fontWeight: 600,
    padding: '10px',
    display: 'flex',
    border: '1px solid #767676',
    borderRadius: '10px',
  },
});
const CardWraper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: 20,
  '& > div': {
    border: '2px solid #767676',
    borderRadius: 10,
    margin: 10,
  },
});

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState(' ');

  useEffect(() => {
    const getData = async () => {
      const response = await getAllPost();
      setPosts(response.data);
    };
    getData();
  }, []);
  return (
    <>
      <Header></Header>
      <SearchWraper>
        <InputBase
          placeholder="Search by Job Title"
          onChange={(e) => setText(e.target.value)}
        />
      </SearchWraper>
      <CardWraper>
        {posts
          .filter((post) =>
            post.profile.toLowerCase().includes(text.toLowerCase())
          )
          .map((post) => (
            <Card>
              <CardContent>
                <Typography variant="h5" style={{ fontStyle: 'italic' }}>
                  {post.profile}
                </Typography>
                <Typography>
                  {post.type === 'online' ? 'Remote' : 'office'}
                </Typography>
                <Typography style={{ color: '#6f6f6f', margin: '10px 0' }}>
                  {post.description.length > 150
                    ? post.description.subString(0, 150) + '...'
                    : post.description}
                </Typography>
                <Typography>
                  <b>Experience:</b> {post.experience}
                </Typography>
                <Typography>
                  <b>Technology:</b> {post.technology.join(' , ')}
                </Typography>
                <Typography>
                  <b>Salary:</b> {post.salary}{' '}
                </Typography>
                <Typography style={{ color: '#6f6f6f', margin: 'auto' }}>
                  Posted on: {new Date(post.createdAt).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </CardWraper>
    </>
  );
};
export default AllPosts;
