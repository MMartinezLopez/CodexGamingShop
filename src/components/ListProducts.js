import { Container } from "@mui/system"
import { Product } from "./Product"
import products from "../static/products.json"


export const ListProducts = () => {
    return (
        <Container sx={{ maxWidth: 'sm', mt: '60px'}}>
            {products.map((product)=><Product {...product}/>)}
        </Container>
    )
}