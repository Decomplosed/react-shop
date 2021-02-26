import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/commerce.png';

const Navbar = () => {
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography variant='h6' className={classes.title} color='inherit'>
            <img
              src={logo}
              alt='React Shop'
              height='25px'
              className={classes.image}
            />
            React Shop
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}></div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
