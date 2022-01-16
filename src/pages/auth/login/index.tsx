import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import {
  Button,
  Checkbox,
  FormControlLabel,
  LinearProgress,
  TextField,
} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { green } from '@mui/material/colors'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import NavigationButtons from 'src/components/NavigationButtons'
import PasswordFields from 'src/components/PasswordFields'
import { pages } from 'src/constants'
import { useTypedSelector } from 'src/hooks'
import { getLoginToken, isEmpty } from 'src/utils'
import useActions from './store/useActions'
import { schema } from './validation'

export default function Login() {
  const history = useHistory()

  const { isLoading } = useTypedSelector(state => state.pages.login)

  const { loginApi, clearStore, setIsRemember } = useActions()

  useEffect(() => {
    if (false && getLoginToken()) {
      history.push(pages.MAIN)
    }

    return () => {
      clearStore()
    }
  }, [])

  return (
    <>
      {isLoading && <LinearProgress />}

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
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Formik
            initialValues={{
              email: 'dmitry.dev.react@gmail.com',
              password: '123456789',
              remember: false,
            }}
            validationSchema={schema}
            onSubmit={values => {
              loginApi(values)
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

                <PasswordFields
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  onlyPassword={true}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      onClick={() => setIsRemember(!values.remember)}
                      color="primary"
                      name="remember"
                      onChange={handleChange}
                      value={values.remember}
                    />
                  }
                  label="Remember me"
                />

                <Button
                  disabled={!Boolean(isEmpty(errors))}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>

          <NavigationButtons
            leftButton={pages.FORGOTPASSWORD}
            rightButton={pages.REGISTRATION}
            rightText="Sing Up"
            leftText="Forgot password?"
          />
        </Box>
      </Container>
    </>
  )
}
