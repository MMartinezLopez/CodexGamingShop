import React, { useState, useEffect } from "react";

import { Container } from "@mui/system"
import { Product } from "./Product"
import axios from "axios"
import { Button, createTheme, ThemeProvider, Tooltip } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"

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



export const Products = () => {

    const [productos, setProductos] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3050/productos').then(res => {
            console.log(res.data)
            setProductos(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const listarProductos = productos.map(producto => {
        return (
            <div key={producto._id}>
                <Product product={producto} />
            </div>)
    })

    return (
        <ThemeProvider theme={theme}>
            <div className="botonAgregar">
                <Tooltip title={carrito.length}>
                    <Button size='large' variant='contained' endIcon={<ShoppingCart />}>carrito</Button>
                </Tooltip>
            </div>
            <Container maxWidth="md">
                {listarProductos}
            </Container>
        </ThemeProvider>
    )
}
