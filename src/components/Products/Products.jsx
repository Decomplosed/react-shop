import React from 'react';
import Grid from '@material-ui/core';

const products = [
  { id: 1, name: 'Shoes', description: 'Running shoes.' },
  { id: 2, name: 'MacBook', description: 'Apple MacBook.' },
];

const Products = () => {
  return (
    <main>
      <Grid container justify='center' spacing={4}>
        <Grid></Grid>
      </Grid>
    </main>
  );
};

export default Products;