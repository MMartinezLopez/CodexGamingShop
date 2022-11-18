import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { Delete, Edit } from '@mui/icons-material';


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

export const Cliente = ({cliente}) => {
    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ width: '100%', height: '200px', margin: '5px', display: 'flex', p: 2 }}>
                <CardContent sx={{ width: '80%', display: "flex", flexDirection: "column", justifyContent: "center", textAlign: 'left' }}>
                    <Typography variant="subtitle1" color="text.secondary">
                        NOMBRE:{cliente.nombre}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        APELLIDO:{cliente.apellido}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        ID: {cliente.identificacion}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        EDAD: {cliente.edad}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        EMAIL: {cliente.correo}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        TELEFONO: {cliente.telefono}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        DIRECCION: {cliente.direccion}
                    </Typography>
                </CardContent>
                <CardActions sx={{ width:'20%', textAlign: 'center', fontSize: 10, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Button href="/admin/edit-product" variant="contained" size='small' color='primary' endIcon={<Edit />} sx={{ m:1 }}>editar</Button>
                <Button href="/admin/products"variant="contained" size='small' color='primary' endIcon={<Delete />} sx={{ m:1 }}>borrar</Button>
                </CardActions>
            </Card>
        </ThemeProvider>
    );
}