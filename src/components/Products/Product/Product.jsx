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
      <CardMedia className={classes.media} image='' title={product.name} />
      <CardContent className={classes.cardContent}>
        <div className={classes.cardContent}>
          <Typography variant='h5' gutterBottom>
            {product.name}
          </Typography>
          <Typography variant='h5'></Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Product;
