import React from 'react';
import { Container,Toolbar,AppBar,IconButton,Typography,Box,Paper,Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";




const useStyles=makeStyles((theme)=>({
  root:{
    flexGrow:1
  },
  menuButton:{
    marginRight:theme.spacing(3)
  },
  title:{
    flexGrow:1
  },
  mainFeaturesPost:{
    position:"relative",
    color:theme.palette.common.white,
    marginBottom:theme.spacing(4),
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center"
  },
  overlay:{
    position:"absolute",
    top:0,
    right:0,
    bottom:0,
    left:0,
    backgroundOverlay:"rgba(0,0,0,.3)"

  },
  mainFeaturesPostContent:{
    position:"relative",
    padding:theme.spacing(9)

  }
}))



function App() {

  const classes=useStyles();


  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>

            <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>AbdulMalik's Website</Typography>

            <Box mr={3}>
              <Button color="inherit" variant="outlined">Log in</Button>
            </Box>
            <Button color="secondary" variant="contained">Sign Up</Button>

          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper className={classes.mainFeaturesPost} style={{ backgroundImage:`url(https://source.unsplash.com/random)` }}>
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>

                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Welcome to my awesome blog
                  </Typography>

                  <Typography
                    component="h5"
                    color="inherit"
                    paragraph
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vero quidem sequi, magnam suscipit rerum.
                  </Typography>

                  <Button varian="contained" color="secondary">
                    Learn More
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </main>
     
    </>
  );
}

export default App;
