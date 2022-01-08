import LockResetIcon from '@mui/icons-material/LockReset'
import { Button, Link, TextField } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { deepOrange } from '@mui/material/colors'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import SendPopUp from 'src/components/SendPopUp'
import { pages } from 'src/constants'
import { useTypedSelector } from 'src/hooks'
import { isEmpty } from 'src/utils'
import useActions from './store/useActions'
import { schema } from './validation'

export default function ForgotPassword() {
  const history = useHistory()

  const { sendStatus } = useTypedSelector(state => state.pages.forgotPassword)

  const { forgontPasswordApi, setSendStatus, clearStore } = useActions()

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
            forgontPasswordApi(values)
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

      <SendPopUp sendStatus={sendStatus} setSendStatus={setSendStatus} />
    </Container>
  )
}
