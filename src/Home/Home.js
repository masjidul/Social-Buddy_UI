import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Posts from '../Posts/Posts';

const Home = () => {
  const [post, setPosts] = useState([]);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  return (
    <React.Fragment>
      <Container fixed >
                {
                    post.map(posts => <Posts post={posts}></Posts>)
                }
      </Container>
    </React.Fragment>
  );
};

export default Home;