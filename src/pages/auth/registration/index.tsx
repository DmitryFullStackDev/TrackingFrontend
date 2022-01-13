import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import { LinearProgress } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import React from 'react'
import SendPopUp from 'src/components/SendPopUp'
import { ContainerStyled } from 'src/elements'
import { useTypedSelector } from 'src/hooks'
import RegistrationForm from './components/form'
import useActions from './store/useActions'

const Registration = () => {
  const { sendStatus } = useTypedSelector(state => state.pages.registraion)

  const { setSendStatus } = useActions()

  return (
    <>
      {false && <LinearProgress />}

      <ContainerStyled component="main">
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

        <SendPopUp
          sendStatus={sendStatus}
          setSendStatus={setSendStatus}
          text="A link to activate your account has been sent to your email"
        />
      </ContainerStyled>
    </>
  )
}

export default Registration
