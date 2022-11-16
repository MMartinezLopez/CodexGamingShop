import React from "react";
import "../App.css";
import { ProductCart } from "./ProductCart";
import { ThemeProvider, Container, createTheme, Card, Typography,Button} from "@mui/material";
import carts from "../static/cart.json"
import { ShoppingCartCheckout } from "@mui/icons-material";

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

const total= carts.map(cart=>cart.cant*cart.price).reduce((prev, next) => prev + next);
export const CartProducts = () => {
    return (
            <ThemeProvider theme={theme}>
                <Container maxWidth= 'md' sx={{ mt:'50px'}}>
                    {carts.map((cart) => <ProductCart {...cart} />)} 
                <Card sx={{width: '100%', textAlign:'center', height:'50px', margin:'5px', display: 'flex', p:2}}>
                    <Typography sx={{ width: '30%', fontSize:'30px'}}>Total:</Typography>
                    <Typography sx={{ width: '40%', fontSize:'30px'}}>$ {total}</Typography>
                    <Button variant="contained" sx={{ width: '30%', display: "flex", flexDirection: "column", justifyContent: "center", textAlign:'center', fontSize:'10px'}}><ShoppingCartCheckout/> Checkout </Button>
                </Card>      
                </Container>
            </ThemeProvider>
    );
}