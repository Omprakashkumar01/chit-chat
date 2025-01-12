import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import { CameraAlt } from '@mui/icons-material'
import { Visuallyhiddeninput } from '../components/Styles/Styledcomp';
import { useInputValidation, useStrongPassword, useFileHandler } from '6pp';
import { Validator } from '../utils/Validator';
import img2 from '../assets/img2.jpg';

const Login = () => {
    const [islogin, setlogin] = useState(true);
    const Togglefunc = () => setlogin((prev) => !prev);

    const name = useInputValidation("");
    const username = useInputValidation("", Validator);
    const bio = useInputValidation("");
    const passwrd = useStrongPassword();

    const avatar = useFileHandler("single");

    const handlesingnup = (e) => {
        e.preventDefault();
    }
    const handlelogin = (e) => {
        e.preventDefault();
    }
    return (
        <div style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover", // Ensures the image covers the entire background
            backgroundPosition: "center", // Centers the image
            height: "auto", // Adjusts height for full screen
            width: "100%", 
        }}>
            <Container component={"main"} maxWidth="xs" sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Paper
                    elevation={3}
                    sx={{
                        padding: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color: "white",
                        backgroundColor: "rgba(156, 161, 239, 0.6)", // Transparent white background
                        backdropFilter: "blur(10px)", // Adds a blur effect
                        borderRadius: "1rem", 
                    }}
                >
                    {islogin ? <>
                        <Typography variant='h5' >Login</Typography>
                        <form style={{
                            width: "100%",
                            marginTop: "1rem",
                            }}
                            onSubmit={handlelogin}>
                            <TextField
                                required
                                fullWidth
                                label="username"
                                margin='normal'
                                variant='outlined'
                                value={username.value}
                                onChange={username.changeHandler}
                            />
                            <TextField
                                required
                                fullWidth
                                label="password"
                                type='password'
                                margin='normal'
                                variant='outlined'
                                value={passwrd.value}
                                onChange={passwrd.changeHandler}
                            />
                            <Button
                                sx={{
                                    marginTop: "1rem",
                                }}

                                fullWidth
                                variant='contained'
                                color='primary'
                                type='submit'
                            >submit</Button>
                            <Typography textAlign={'center'} margin={'1rem'}>or</Typography>
                            <Button
                                fullWidth
                                variant='text'
                                color='white'
                                onClick={Togglefunc}
                            >
                                sign up instead
                            </Button>

                        </form>
                    </> : <>
                    
                        <Typography variant='h5'>Sign Up</Typography>
                        <form style={{
                            width: "100%",
                            marginTop: "0.5rem"
                        }} onSubmit={handlesingnup}>
                            <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                                <Avatar
                                    sx={{
                                        width: "10rem",
                                        height: "10rem",
                                        objectFit: "contain",
                                        
                                    }}
                                    src={avatar.preview}
                                />
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        bottom: "0",
                                        right: "0",
                                        color: "white",
                                        bgcolor: "rgba(0,0,0,0.5)",
                                        ":hover": {
                                            bgcolor: "rgba(0,0,0,0,7)",
                                        },
                                    }}
                                    component="label"
                                >
                                    <>
                                        <CameraAlt />
                                        <Visuallyhiddeninput type="file" onChange={avatar.changeHandler} />
                                    </>

                                </IconButton>
                            </Stack>
                            {
                                avatar.error && <Typography m={"1rem auto"} width={"fit-content"} display={"block"} color='error' variant='caption'>{avatar.error}</Typography>
                            }
                            <TextField
                                required
                                fullWidth
                                label="name"
                                margin='normal'
                                variant='outlined'
                                value={name.value}
                                onChange={name.changeHandler}
                            />
                            <TextField
                                required
                                fullWidth
                                label="username"
                                margin='normal'
                                variant='outlined'
                                value={username.value}
                                onChange={username.changeHandler}
                            />
                            {
                                username.error && <Typography color='error' variant='caption'>{username.error}</Typography>
                            }
                            <TextField
                                required
                                fullWidth
                                label="bio"
                                margin='normal'
                                variant='outlined'
                                value={bio.value}
                                onChange={bio.changeHandler}
                            />
                            <TextField
                                required
                                fullWidth
                                label="password"
                                type='password'
                                margin='normal'
                                variant='outlined'
                                value={passwrd.value}
                                onChange={passwrd.changeHandler}
                            />
                            {
                                passwrd.error && <Typography color='error' variant='caption'>{passwrd.error}</Typography>
                            }
                            <Button
                                sx={{
                                    marginTop: "1rem",
                                }}
                                fullWidth
                                variant='contained'
                                color='primary'
                                type='submit'
                            >submit</Button>
                            <Typography textAlign={'center'} margin={'0.2rem'}>or</Typography>
                            <Button

                                fullWidth
                                variant='text'
                                color='white'
                                onClick={Togglefunc}
                            >
                                login instead
                            </Button>

                        </form>
                        
                    </>
                    }
                </Paper>
            </Container>
        </div>
    )
}

export default Login