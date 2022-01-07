import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import { Container, LinearProgress, Link } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { pages } from 'src/constants'
import RegistrationForm from './components/RegistrationForm'

const Registration = () => {
  const history = useHistory()

  return (
    <>
      {false && <LinearProgress />}

      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            paddingBottom: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AppRegistrationIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <RegistrationForm />

          <Grid container>
            <Grid item xs>
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  history.push(pages.FORGOTPASSWORD)
                }}
              >
                Forgot password?
              </Link>
            </Grid>

            <Grid item>
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  history.push(pages.LOGIN)
                }}
              >
                Sign In
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Registration
