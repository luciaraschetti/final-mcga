import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Logo from './img/pngegg.png';

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
          <Link to="/public"><img src={Logo} className="logoNavbar" /></Link>
          <Typography variant='h4' className={classes.title} color='inherit' noWrap>
            eSports Platform
          </Typography>
          <Link to={props.buttonText} className="buttonNav"><Button color='inherit'>{props.buttonText}</Button></Link>
        </Toolbar>
      </AppBar>
      {props.children}
    </React.Fragment>
  );
}

export default Index;