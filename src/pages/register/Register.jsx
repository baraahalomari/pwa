import React, { useState } from 'react';
import { Container, Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import useStyles from './style';

const Register = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = createTheme();
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className={classes.container} >
          <Avatar className={classes.avatar} >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'} </Typography>
          <Box component="form" noValidate className={classes.form} >
            <Grid container spacing={2}>
              {isSignUp && (
                <>
                  <Grid item xs={12} sm={6} >
                    <TextField autoComplete="fname" name="firstName" required fullWidth id="firstName" label="First Name" autoFocus />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
                  </Grid>
                </>
              )}
              <Grid item xs={12} >
                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
              </Grid>
              <Grid item xs={12} >
                <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
              </Grid>
              {isSignUp && (
                <Grid item xs={12} >
                  <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email." />
                </Grid>
              )}
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{mt:2,mb:2}} className={classes.buttonSign} onClick={() => navigate('/')} >{isSignUp ? 'Sign Up' : 'Sign In'}</Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={() => setIsSignUp(!isSignUp)}>
                  {isSignUp ? 'Already have an account? Sign in' : 'Don\'t have an account? Sign up'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Register;