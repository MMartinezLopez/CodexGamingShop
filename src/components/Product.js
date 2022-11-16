import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { ThemeProvider } from '@emotion/react';
import { Container, createTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { AddShoppingCartOutlined } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#40b988',
      contrastText: 'white',
    },

    secondary: {
      main: '#69f0ae',
      contrastText: '#000000',
    },
  },
});

export const Product = (product) => {
  return (
    <ThemeProvider theme={theme}>
    <Card sx={{ width: '100%', height:'150px', margin:'5px', display: 'flex', p:2}}>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{maxWidth:'150px',maxHeight:'100%', display:'block', p:1}}
      />
      <CardContent sx={{width:'60%',display: "flex", flexDirection: "column", justifyContent: "center", textAlign:'center'}}>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {product.desc}
        </Typography>
      </CardContent>
      <CardActions sx={{textAlign:'center', fontSize:10, display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <Typography variant='h5' component='div'>$ {product.price}</Typography>
        <Button variant="contained" size='large' color='primary' endIcon={<AddShoppingCartOutlined />}>add</Button>
      </CardActions>
    </Card>
    </ThemeProvider>
  );
}
