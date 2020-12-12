import React from 'react';
import { Container,Toolbar,AppBar,IconButton,Typography,Box } from '@material-ui/core';
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
  }
}))



function App() {

  const classes=useStyles();


  return (
    <div className="App">
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
     
    </div>
  );
}

export default App;
