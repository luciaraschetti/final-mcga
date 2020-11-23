import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center'
  }
}));

const Index = (props: any) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position='relative' elevation={0}>
        <Toolbar>
          <Typography variant='h4' className={classes.title} color='inherit' noWrap>  
            eSports Platform
          </Typography>
          <Button color='inherit'>{props.buttonText}</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Index;