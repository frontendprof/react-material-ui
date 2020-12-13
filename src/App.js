import React from 'react';
import { Container,Toolbar,AppBar,IconButton,Typography,Box,
  Paper,Grid,Card,CardMedia,CardContent,CardActions,Dialog, 
  DialogContent, TextField,DialogActions,DialogContentText,DialogTitle } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";




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
    padding:theme.spacing(6),
    marginTop:theme.spacing(8)
  },
  cardMedia:{
    paddingTop:"56.25%",
  },
  cardContent:{
    flexGrow:1
  },
  cardGrid:{
    marginTop:theme.spacing(5)
  }
}))

const cards=[1,2,3,4,5,6,7,8,9];


function App() {

  const classes=useStyles();
  const [value,setValue]=React.useState("recents");

  const handleChange=(e,newVal)=>{
    setValue(newVal)
  }

  const [open,setOpen]=React.useState(false);

  const handleClickOpen=()=>{
    setOpen(true)
  }

  const handleClose=()=>{
    setOpen(false)
  }


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
              <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log in</Button>

              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Log in Modal</DialogTitle>

                <DialogContent>
                  <DialogContentText> Log in to see videos  </DialogContentText>

                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type='email'
                    fullWidth
                  />

                  <TextField
                    
                    margin="dense"
                    id="pass"
                    label="Password"
                    type='password'
                    fullWidth
                  />

                </DialogContent>

                <DialogActions>
                  <Button onClick={handleClose} color="primary">Cancel</Button>
                  <Button onClick={handleClose} color="primary">Log In</Button>
                </DialogActions>
              </Dialog>


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

        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Web Development Blog</Typography>
            <Typography
                    component="h5"
                    color="textSecondary"
                    paragraph
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quas corrupti vero hic quibusdam doloribus incidunt autem itaque sed maxime.
                  </Typography>
                  <div className={classes.mainButtons}>
                    <Grid container justify="center" spacing={5}>

                      <Grid item>
                      <Button variant="contained" color="primary">Start Now</Button>                      
                      </Grid>


                      <Grid item>
                      <Button variant="outlined" color="primary">Learn More</Button>                      
                      </Grid>

                      
                    </Grid>
                  </div>
          </Container>
        </div>



        <Container className={classes.cardGrid} maxWidth="md">

          <Grid container spacing={4}>
            {cards.map(card=>{
              return (<Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>

                  <CardMedia 
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />

                  <CardContent className={classes.CardContent}>

                    <Typography variant="h5" gutterBottom>
                      Blog Post
                    </Typography>

                    <Typography>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, dolore.
                    </Typography>
                  </CardContent>

                  <CardActions>

                    <Button size="small" color="primary">
                      View
                    </Button>

                    <Button size="small" color="primary">
                      Edit
                    </Button>

                    <LayerIcon />
                    <PlayCircleFilledIcon />

                  </CardActions>


                </Card>
              </Grid>)
            })}
          </Grid>

        </Container>

      </main>
      
      <footer>
            <Typography variant="h6" align="center" gutterBottom>Footer</Typography>

            <BottomNavigation
              value={value}
              onChange={handleChange}
              className={classes.root}
            >

              <BottomNavigationAction
                label="Recents"
                value="recents"
                icon={<RestoreIcon />}
              />

              <BottomNavigationAction
                label="Favorites"
                value="favorites"
                icon={<FavoriteIcon />}
              />

              <BottomNavigationAction
                label="Nearby"
                value="nearby"
                icon={<LocationOnIcon />}
              />

              <BottomNavigationAction
                label="Folder"
                value="folder"
                icon={<FolderIcon />}
              />             

            </BottomNavigation>


            <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
              Web Development Blog React js Material Site UI
            </Typography>
      </footer>


    </>
  );
}

export default App;
