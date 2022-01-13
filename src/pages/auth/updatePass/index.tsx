import PasswordIcon from '@mui/icons-material/Password'
import { Button } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { green } from '@mui/material/colors'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PasswordFields from 'src/components/PasswordFields'
import SendPopUp from 'src/components/SendPopUp'
import { useTypedSelector } from 'src/hooks'
import { isEmpty } from 'src/utils'
import useActions from './store/useActions'
import { schema } from './validation'

export default function ResetPass() {
  const search = useLocation().search

  const token = new URLSearchParams(search).get('token')

  const { sendStatus } = useTypedSelector(state => state.pages.updatePass)

  const { updatePassApi, clearStore, setSendStatus } = useActions()

  useEffect(
    () => () => {
      clearStore()
    },
    [],
  )

  return (
    <>
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
          <Avatar sx={{ m: 1, bgcolor: green[500] }}>
            <PasswordIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Set new password
          </Typography>

          <Formik
            initialValues={{
              password: '',
              confirmPassword: '',
            }}
            validationSchema={schema}
            onSubmit={({ password }) => {
              updatePassApi({ password, token })
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form>
                <PasswordFields
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                />

                <Button
                  disabled={!Boolean(isEmpty(errors))}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Set new password
                </Button>
              </Form>
            )}
          </Formik>
        </Box>

        <SendPopUp
          sendStatus={sendStatus}
          setSendStatus={setSendStatus}
          text="Your password was changed"
        />
      </Container>
    </>
  )
}
