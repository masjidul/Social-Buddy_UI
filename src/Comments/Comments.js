import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import Photos from './Photos';
import { CardHeader } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import PostInfo from './PostInfo';



const Comments = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
       
    }, [postId])

    // const limit = comments.slice(0, 5);
   
    return (
      <Card>
          <PostInfo></PostInfo>
          <h1>Comments({comments.length}):</h1>
        {
          comments.map(details => 
          <Card>
          <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            <Photos></Photos>
          </Avatar>
        }
       title={details.name}
      />
          <Typography variant="body2" color="textSecondary" component="p">
            {details.body}
          </Typography>
        </Card>
            )
        }
      
    </Card>
    );
};

export default Comments;