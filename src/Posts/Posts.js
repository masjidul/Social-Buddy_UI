import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Photos from '../Comments/Photos';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));


const Posts = (props) => {
    const { title, body, id } = props.post;
    let history = useHistory();

    const handleComment = (postId) => {
        const url = `/post/${postId}`;
        history.push(url)
    }
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
                <Avatar aria-label="recipe">
                    <Photos ></Photos>
                </Avatar>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <h2>{title}</h2>
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {body}
                </Typography>
                
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                <Link to={`/post/${id}`}>
                <Button variant="contained" color="primary" onClick={() => handleComment(id)}>
                Comments
                </Button>
            </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Posts;