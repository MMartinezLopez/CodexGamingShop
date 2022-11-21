import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

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

export const Venta = ({ venta }) => {
    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ width: '100%', height: '150px', margin: '5px', display: 'flex', p: 2 }}>
                <CardContent sx={{ width: '40%', display: "flex", flexDirection: "column", justifyContent: "center", textAlign: 'center' }}>
                    <Typography gutterBottom variant="h6" component="div">
                        Venta ID-{venta.id}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="div">
                        Cliente:{venta.cliente.correo}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="div">
                        #Identificacion:{venta.cliente.identificacion}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        Fecha: {venta.fecha}
                    </Typography>
                </CardContent>
                <CardActions sx={{ textAlign: 'center', fontSize: 10, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography variant='h5' component='div'>$ {venta.valor}</Typography>
                </CardActions>
            </Card>
        </ThemeProvider>
    );
}