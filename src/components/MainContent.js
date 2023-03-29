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


function MainContent() {
    return (
        <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                // backgroundImage: 'url(https://media.istockphoto.com/id/1294603953/vector/abstract-black-stripes-diagonal-background.jpg?s=612x612&w=0&k=20&c=nQZHTk-o97cNVqWnUe8BJg0A5jQG0tqylquzbt9YtcQ=)',
                // backgroundImage: 'url(https://images.unsplash.com/photo-1513569771920-c9e1d31714af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)',
                backgroundImage: 'url(https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Box sx={{
                margin: '30px',
                position: 'relative',
                top: '13em'
            }}>
                <Typography variant='h2' sx={{
                    color: 'black',
                    fontWeight: 'bold'
                }}>Welcome to the Hoppery</Typography>
                <Typography sx={{
                    color: 'black'
                }}>
                    {/* Fuse helps developers to build organized and well coded dashboards full of beatiful and rich modules. Join us and start
                    build your application today */}
                    Find the best restaurants, cafes and bars near you
                </Typography>
                <Box sx={{ position: 'absolute', margin: '30px' }}>
                    <AvatarGroup max={5} sx={{ position: 'absolute', left: '20%' }}>
                        <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                        <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                    </AvatarGroup>
                    <Typography sx={{
                        color: 'black',
                        // position: 'absolute', left: '35%', top: '8em'
                        position: 'relative', left: '17em', top: '0.5em'

                    }}>Morethan 70% people joined us. It's your turn
                    </Typography>
                </Box>
            </Box>

        </Grid>
    )
}

export default MainContent