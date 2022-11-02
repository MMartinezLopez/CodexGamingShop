import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddCart from './AddCart'


export const Product = (product) => {
  return (
    <Card sx={{ width: '250px', margin:'5px', display: 'inline-block'}}>
      <CardMedia
        component="img"
        width="200"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle2" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant='h6' component='div'>$ {product.price}</Typography>
        <AddCart/>
      </CardActions>
    </Card>
  );
}
