import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import LockResetIcon from '@mui/icons-material/LockReset'
import { Button, Link, TextField } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { deepOrange, green } from '@mui/material/colors'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import { useHistory } from 'react-router-dom'
import { pages } from 'src/constants'
import { useTypedSelector } from 'src/hooks'
import { isEmpty } from 'src/utils'
import useActions from './store/useActions'
import { schema } from './validation'

export default function ForgotPassword() {
  const history = useHistory()

  const { sendStatus } = useTypedSelector(state => state.pages.forgotPassword)

  const { forgontPassword, setSendStatus, clearStore } = useActions()

  const popUpWidth = isMobile ? '90%' : 400

  useEffect(() => {
    if (sendStatus === 'done') {
      setTimeout(() => history.push(pages.LOGIN), 5000)
    }

    return () => {
      clearStore()
    }
  }, [])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: deepOrange[500] }}>
          <LockResetIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Forgot password
        </Typography>

        <Formik
          initialValues={{
            email: 'dmitry.dev.react@gmail.com',
          }}
          validationSchema={schema}
          onSubmit={values => {
            forgontPassword(values)
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form>
              <TextField
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              <Button
                disabled={!Boolean(isEmpty(errors))}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send reset link
              </Button>
            </Form>
          )}
        </Formik>

        <Grid container>
          <Grid item xs>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                history.push(pages.LOGIN)
              }}
            >
              Sing In
            </Link>
          </Grid>

          <Grid item>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                history.push(pages.REGISTRATION)
              }}
            >
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>

      <Modal
        open={sendStatus !== 'waiting'}
        onClose={() => setSendStatus('waiting')}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: popUpWidth,
            bgcolor: 'background.paper',
            borderRadius: '4px',
            outline: 'none',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {sendStatus === 'sending' && (
            <CircularProgress sx={{ color: green[500], fontSize: 50 }} />
          )}

          {sendStatus === 'done' && (
            <CheckCircleOutlineIcon sx={{ color: green[500], fontSize: 50 }} />
          )}

          <Typography
            mt={2}
            mb={2}
            textAlign="center"
            variant="body1"
            gutterBottom
          >
            The reset password link was send to your email
          </Typography>

          <Link
            alignSelf="flex-end"
            variant="inherit"
            component="button"
            onClick={() => {
              history.push(pages.LOGIN)
            }}
          >
            Back to Sign In
          </Link>
        </Box>
      </Modal>
    </Container>
  )
}
