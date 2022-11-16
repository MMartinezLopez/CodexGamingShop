import { ChevronLeft, Save } from "@mui/icons-material"
import products from "../static/products.json"
import { ThemeProvider,Typography, Button, createTheme, TextField, Card} from "@mui/material";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

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



const fields=Object.entries(products[0]);


export const FormEditProduct = () => {
    return (
        
        <ThemeProvider theme={theme}>
        <div className="login">
            <Card sx={{
                width: 300,
                height: 400,
                backgroundColor: 'primary',
                display: 'block',
                textAlign: 'center',
                p: 5
            }}><Link to='/'><Logo/></Link>
                <Typography fontWeight={700}>Editar Producto</Typography>
                {fields.map((field)=><TextField size="small" margin="normal" defaultValue={field[1]} fullWidth='true' label={field[0].toUpperCase()}/>)}
                <Button href="/admin" variant="contained" startIcon={<ChevronLeft />} sx={{ m:1 }}>back</Button>
                <Button href="/admin" variant="contained" endIcon={<Save />} sx={{ m:1 }}>Save</Button>
            </Card>
        </div>
        </ThemeProvider>
    )
}