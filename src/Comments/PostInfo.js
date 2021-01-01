import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import Photos from './Photos';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const PostInfo = () => {
    const classes = useStyles();
    const {postId} = useParams()
      const [postInfo, setpostInfo] = useState({});
      const { title, body } = postInfo;
      useEffect(() => {
          const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
          fetch(url)
              .then(res => res.json())
              .then(data => setpostInfo(data))
      }, [postId]);
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia>
            
             </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {body} Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  };

export default PostInfo;