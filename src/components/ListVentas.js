import React from "react"
import { Container } from "@mui/system"
import { Venta } from "./Venta"
import sells from "../static/sells.json"


export const ListVentas = () => {
    return (
        <Container maxWidth="md">
            {sells.map((sell)=><Venta {...sell}/>)}
        </Container>
    )
}