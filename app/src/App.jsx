import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePost from './Pages/CreatePost';
import { routepath } from './routes/route';
import AllPosts from './Pages/AllPosts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={routepath.Home} element={<Home />} />
        <Route path={routepath.create} element={<CreatePost />} />
        <Route path={routepath.posts} element={<AllPosts />} />
      </Routes>
    </Router>
  );
};
export default App;
