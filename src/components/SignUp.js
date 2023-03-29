import React, { useState } from 'react';
import axios from "axios";
// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AvatarGroup } from '@mui/material';
import { useNavigate } from "react-router-dom";
import MainContent from './MainContent';

const theme = createTheme();

const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [check, setCheck] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(
            `https://snapkaro.com/eazyrooms_staging/api/user_registeration`, {
            "user_firstname": userName,
            "user_email": email,
            "user_phone": phone,
            "user_password": password,
            "user_lastname": "Khan",
            "user_city": "Hyderabad",
            "user_zipcode": "500072"
        })
        navigate("/signIn")

    };

    const handleDisable = () => {
        return userName && password && phone && email && check === true
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <MainContent />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, backgroundColor: '#EFB868' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <Typography component="p" variant="p">
                            Already have an account? <Link href="/signIn" variant="body2">
                                Sign In
                            </Link>
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="User name"
                                name="userName"
                                autoComplete="userName"
                                value={userName || ''}
                                autoFocus
                                onChange={(event) => setUserName(event.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email || ''}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={password || ''}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="phone"
                                label="Phone"
                                type="phone"
                                id="phone"
                                value={phone || ''}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="I agree to Terms of services and privacy policy "
                                onChange={() => setCheck(!check)}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    mt: 3, mb: 2, width: '300px', borderRadius: '20px',
                                    textTransform: 'none',
                                    fontFamily: ['Inter', 'sans-serif'].join(','),
                                    backgroundColor: '#EFB868',
                                    color: 'black',
                                    ':hover': {
                                        backgroundColor: '#facd91', // theme.palette.primary.main
                                        color: 'black',
                                    },
                                }}
                                onClick={handleSubmit}
                                disabled={!handleDisable()}

                            >
                                Create your free account
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default SignUp