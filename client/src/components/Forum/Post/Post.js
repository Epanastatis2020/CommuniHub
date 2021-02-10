import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

const useStyles = makeStyles((theme) => ({
    root: {
      height: "auto",
    },
    avatar: {
      backgroundColor: blue[500],
    },
  }));

export default function Post(props) {
  const classes = useStyles();

  console.log(props);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
            <Avatar alt={props.author} className={classes.blue} />
          }
        title={props.author}
        subheader={props.createdAt}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ThumbUpAltIcon color="inherit"/>
          <Typography variant="caption">{props.upvotes}</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <ThumbDownAltIcon color="error"/>
          <Typography variant="caption" color="error">{props.downvotes}</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}