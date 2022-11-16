import React from "react"
import { Container } from "@mui/system"
import { Product } from "./Product"
import products from "../static/products.json"


export const ListProducts = () => {
    return (
        <Container maxWidth="md">
            {products.map((product)=><Product {...product}/>)}
        </Container>
    )
}