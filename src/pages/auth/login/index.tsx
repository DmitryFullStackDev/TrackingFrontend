import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  LinearProgress,
  OutlinedInput,
  TextField,
} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { green } from '@mui/material/colors'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import FormHelperText from '@mui/material/FormHelperText'
import Typography from '@mui/material/Typography'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import NavigationButtons from 'src/components/NavigationButtons'
import { pages } from 'src/constants'
import { useTypedSelector } from 'src/hooks'
import { getLoginToken, isEmpty } from 'src/utils'
import useActions from './store/useActions'
import { schema } from './validation'

export default function Login() {
  const history = useHistory()

  const [isVisible, setIsVisible] = useState<boolean>(false)

  const { isLoading } = useTypedSelector(state => state.pages.login)

  const { loginApi, clearStore, setIsRemember } = useActions()

  const handleClickShowPassword = () => setIsVisible(prev => !prev)

  useEffect(() => {
    if (false && getLoginToken()) {
      history.push(pages.HOME)
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

                <FormControl
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                >
                  <InputLabel htmlFor="password">Password</InputLabel>

                  <OutlinedInput
                    id="password"
                    type={isVisible ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {isVisible ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />

                  {Boolean(touched.password && errors.password) && (
                    <FormHelperText id="component-helper-text">
                      {errors.password}
                    </FormHelperText>
                  )}
                </FormControl>

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
          />
        </Box>
      </Container>
    </>
  )
}
