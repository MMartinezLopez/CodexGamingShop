import { Add, ChevronLeft } from "@mui/icons-material"
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

const keys = Object.keys(products[0])
export const FormAddProduct = () => {
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
                <Typography fontWeight={700}>Nuevo Producto</Typography>
                {keys.map((key) => <TextField size="small" margin="normal" fullWidth='true' label={key.toUpperCase()} />)}
                <Button href="/admin" variant="contained" startIcon={<ChevronLeft />} sx={{ m:1 }}>back</Button>
                <Button href="/admin" variant="contained" endIcon={<Add />} sx={{ m:1 }}>Add</Button>
            </Card>
        </div>
        </ThemeProvider>
    )
}