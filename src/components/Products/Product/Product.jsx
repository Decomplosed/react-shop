import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const Product = () => {
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media}></CardMedia>
    </Card>
  );
};

export default Product;
