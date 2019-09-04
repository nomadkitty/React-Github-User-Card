import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 300,
    margin: 10,
  },
  media: {
    height: 280,
  },
  Typography: {
    textAlign: "left",
  },
});

function UserCard (props) {
  const classes = useStyles();

  console.log(props)
  const { login, name, location, html_url, followers, following, avatar_url, bio } = props.users
  return(
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={avatar_url} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">{login}</Typography>
          <Typography gutterBottom variant="h5" component="h4">{name}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Location: {location}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Profile: <a href={html_url}>{html_url}</a></Typography>
          <Typography variant="body2" color="textSecondary" component="p">Followers: {followers}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Following: {following}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Bio: {bio}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default UserCard;