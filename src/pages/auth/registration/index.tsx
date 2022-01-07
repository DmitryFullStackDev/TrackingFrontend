import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import { Container, LinearProgress } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import React from 'react'
import { isMobile } from 'react-device-detect'
import RegistrationForm from './components/RegistrationForm'

const Registration = () => {
  const maxWidth = isMobile ? 'xs' : 'lg'

  return (
    <>
      {false && <LinearProgress />}

      <Container component="main" maxWidth={maxWidth}>
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
        </Box>
      </Container>
    </>
  )
}

export default Registration
