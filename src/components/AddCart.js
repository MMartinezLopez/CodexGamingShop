import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { AddShoppingCartOutlined } from '@mui/icons-material';
import { Stack } from '@mui/system';


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
export default function BasicButtons() {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2} direction="row">
      <Button variant="outlined" size='small' color='primary' endIcon={<AddShoppingCartOutlined />}>comprar</Button>
      </Stack>
    </ThemeProvider>
  );
}