import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';

const Cart = () => {
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography>Your Shopping Cart</Typography>
    </Container>
  );
};

export default Cart;
