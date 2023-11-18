import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function Copyright(props) {
    return (
        <Typography variant="body2" align="center" color={'white'} {...props}>
            Guatemala noviembre 2023
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function FormIntecap() {




    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };


    return (

        <div className='people'>


            <ThemeProvider theme={defaultTheme} >



                <Container component="main" maxWidth="xm" className='gradiente'>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={7} className='logo'> 
                                <img className='centrarImagen' src="logo-intecap.png" alt="Logo intecap" />
                            </Grid>
                            <Grid item xs={12} sm={5} >
                            <Card sx={{ minWidth: 275 }} variant="outlined" className='card'>
      <CardContent>

                                <Typography component="h1" variant="h4" color={'white'}>
                                    Bienvenido de vuelta
                                </Typography>

                                <Typography component="h3" variant="h6" color={'white'}>
                                    Que bueno verte otra vez :)
                                </Typography>
                                <Box>
                                    <Grid container spacing={2} maxWidth={'sm'}>
                                        <Grid item xs={12} sm={6}>
                                            <Avatar sx={{ m: 1, }}>
                                                <FacebookIcon className='iconFacebook' />
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Avatar sx={{ m: 1, }}>
                                                <GoogleIcon className='iconGoogle' />

                                            </Avatar>
                                        </Grid>
                                    </Grid>
                                </Box>



                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} color={'white'}>
                                    <Grid container spacing={2}>

                                        <Grid item xs={12}>
                                            <TextField
                                            
                                                required
                                                fullWidth
                                                id="email"
                                                label="Correo electronico"
                                                name="email"
                                                autoComplete="email"
                                                // helperText="Por favor, ingrese el correo"
                                                 
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                
                                                required
                                                fullWidth
                                                name="password"
                                                label="Clave"
                                                type="password"
                                                id="password"
                                                autoComplete="new-password"
                                                // helperText="Por favor, ingrese la clave"
                                            />
                                            <Link href="#" variant="body2">
                                                Olvidaste tu clave?
                                            </Link>
                                        </Grid>
                                        {/* <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" />}
                                        label="I want to receive inspiration, marketing promotions and updates via email."
                                    />
                                </Grid> */}
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Iniciar sesion
                                    </Button>

                                    <Grid container justifyContent="flex-end">
                                        <Grid container>
                                            <Grid item xs={9} sm={9} >

                                                <Typography component="p" variant="p">
                                                    Es la primera vez que estudias en el Intecap?
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={3} sm={3}>
                                                <Link href="/register" variant="body2">
                                                    Registrate
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <hr/>
                                    <Button
                                        
                                        fullWidth
                                        variant="outlined"
                                        sx={{ mt: 3, mb: 2,color:'white' }}
                                    >
                                        Iniciar sesion con tu organizacion
                                    </Button>
                                </Box>
                                </CardContent>
                                </Card>
                            </Grid>

                        </Grid>



                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider>


        </div>
    );


}

