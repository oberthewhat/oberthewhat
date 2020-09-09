import React from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ReactTooltip from "react-tooltip";

function App() {

  return (
    <div className="root">

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
      <div className='mobileDescript'>
        <h3>
        Junior Web Developer<br />
        Javascript - React - NodeJS - Express</h3>
      
      </div>
      <div className='linkBoxRoot'>
        <div className="linkbox">
          <a href="https://www.linkedin.com/in/john-obertubbesing-775b33185/" data-tip='LinkedIn' >
            <i class="fab fa-linkedin"></i>
          </a>

          <a href="https://github.com/oberthewhat" data-tip="GitHub">
            <i class="fab fa-github-square"></i>
          </a>
          <a href="https://www.facebook.com/oberthewhat" data-tip="Facebook">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="https://www.youtube.com/user/oberthewhat" data-tip='Youtube'>
          <i class="fa fa-youtube-square" aria-hidden="true"></i>
          </a>
          <a href="mailto:oberthewhat@gmail.com" data-tip='Email'>
          <i class="fa fa-envelope-square" aria-hidden="true"></i>
          </a>
          <a href="https://docs.google.com/document/d/17lqWWJg9yZB6JSeOOn7DJRm4Hnu-q2Lnbqnmi9OEsEQ/edit?usp=sharing" data-tip='Resume'>
          <i class="fa fa-file-text" aria-hidden="true"></i>
          </a>
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
              <a href='https://oberthewhat.github.io/ACA_web101_John_obertubbesing/src/pineshockey/index.html'>
                <CardMedia
                  className='cardMedia'
                  image="https://i.imgur.com/yz9TjJ3.png"
                  title="Contemplative Reptile"
                /></a>

            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Pinus Hockey
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Using CSS and HTML i put togethere this page as a fun project for my beer leauge hockey team. There is also a small Javascript click game in the events section. </Typography>
                <ReactTooltip />
            </CardContent>
          </Card>
          <Card className='cardRoot'>
            <CardActionArea>
              <a href='https://oberthewhat.github.io/ACA_web101_John_obertubbesing/src/online-resume/resume.html'>
                <CardMedia
                  className='cardMedia'
                  image="https://i.imgur.com/moZfQJK.png"
                  title="Contemplative Reptile"
                /></a>

            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                John Obertubbesing Resume
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This was an early project of mine building an online resume for myself. I have kept it updated as best I can and is a good source for information on me. I used CSS gride and flex as well as other custom styling. </Typography>
                <ReactTooltip />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;



// link to online resume 
// https://oberthewhat.github.io/ACA_web101_John_obertubbesing/src/online-resume/resume.html