import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 545,
  },
  media: {
    height: 140,
  },
});

function App() {
  const classes = useStyles();




  return (
    <div>

      <div className="navRoot">
        <div className="navPhoto">
          <img id="navPhoto" src='https://i.imgur.com/Ip1yyyN.jpg'></img>
        </div>
        <div className="navBody">
          <div id="navName">
            <div id="name">John Obertubbesing</div>
            <div id="descript">Full Stack Web Developer</div>
          </div>
        </div>
      </div>
      <div className='projectRoot'>
        <h2>Projects</h2>
        <div className='projectCard'>
          <Card className='cardRoot'>
            <CardActionArea>
              <a href='https://www.restaurantlistr.com'>
              <CardMedia
                className='cardMedia'
                image="https://i.imgur.com/GeDZS6u.png"
                title="Contemplative Reptile"
              /></a>

            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Listr
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  This Page was made as my capstone project for school. This was a full stack program made with react, nodeJS, mySQL, Express, and lots of custom CSS, along with some use of material UI</Typography>
            </CardContent>
          </Card>
          <Card className='cardRoot'>
            <CardActionArea>
              <a href='https://www.restaurantlistr.com'>
              <CardMedia
                className='cardMedia'
                image="https://i.imgur.com/GeDZS6u.png"
                title="Contemplative Reptile"
              /></a>

            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Listr
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  This Page was made as my capstone project for school. This was a full stack program made with react, nodeJS, mySQL, Express, and lots of custom CSS, along with some use of material UI</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
