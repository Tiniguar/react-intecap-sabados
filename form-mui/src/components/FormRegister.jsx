import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


import PersonIcon from '@mui/icons-material/Person';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BadgeIcon from '@mui/icons-material/Badge';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import {

    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    IconButton,
    InputAdornment,

} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" align="center" color={'white'} {...props}>
            Guatemala Noviembre 2023
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function FormRegister() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    const listEstudios = [
        {
            value: 'Primaria',
            label: 'Primarias',
        },
        {
            value: 'Basico',
            label: 'Basico',
        },
        {
            value: 'Diversificado',
            label: 'Diversificado',
        },
        {
            value: 'Tecnico Univesitario',
            label: 'Tecnico Universitario',
        },
        {
            value: 'Licenciatura',
            label: 'Licenciatura',
        }


    ];

    return (
        <div className='gradienteForm'>

       
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="md" >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                <Card sx={{ minWidth: 275 , m:4}}>
      <CardContent>

      
                    <Grid container spacing={2}>
                        <Grid item xs={2} sm={2}>
                            <Avatar sx={{ m: 1, }}>
                                <DynamicFormIcon className='iconLock' />
                            </Avatar>
                        </Grid>
                        <Grid item xs={10} sm={10}>
                            <Typography component="h1" variant="h5">
                                Formulario de Registro
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Nombre"
                                    autoFocus
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="end">
                                                <PersonIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />


                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Apellidos"
                                    name="lastName"
                                    autoComplete="family-name"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="end">
                                                <PermIdentityIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="age"
                                    required
                                    fullWidth
                                    id="age"
                                    label="Edad"
                                    type="number"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="end">
                                                <BadgeIcon />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <FormControl component="fieldset" margin="normal">
                                    <FormLabel component="legend">Género</FormLabel>
                                    <RadioGroup
                                        name="genero"
                                        row
                                    >
                                        <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                                        <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>

                                <TextField
                                    fullWidth
                                    label="Nivel de Estudios"
                                    name='estudios'

                                    variant="outlined"

                                    required
                                    margin="normal"
                                    select
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="end">
                                                <WorkspacePremiumIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                >
                                    {
                                        listEstudios.map((item) => (
                                            <MenuItem key={item.value} value={item.value}>
                                                {item.label}
                                            </MenuItem>
                                        ))
                                    }
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="username"
                                    name="Usuario"
                                    autoComplete="family-name"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="end">
                                                <AccountCircleIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Correo electronico"
                                    name="email"
                                    autoComplete="email"
                                    type="email"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="end">
                                                <ContactMailIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Telefono"
                                    name="phone"
                                    autoComplete="phone"
                                    type="number"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="end">
                                                <ContactPhoneIcon />
                                            </InputAdornment>
                                        ),
                                    }}
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
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="end">
                                                <PasswordIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="repPassword"
                                    label="Confirmar Clave"
                                    type="password"
                                    id="repPassword"
                                    autoComplete="repeat-password"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="end">
                                                <PasswordIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" />}
                                    label="Acepto terminos y condiciones"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6}>
                                <Typography component="h5" variant="p">
                                    * Campos requeridos
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6}>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Registrar
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Ya tienes una cuenta? Inicie Sesion
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    </CardContent>
                    </Card>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider >
        </div>
    );
}