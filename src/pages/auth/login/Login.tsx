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
  OutlinedInput,
  TextField,
} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import FormHelperText from '@mui/material/FormHelperText'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useActions from './store/useActions'
import { schema } from './validation'

const theme = createTheme()

export default function Login() {
  const history = useHistory()

  const [siVisible, setIsVisible] = useState(false)

  const handleClickShowPassword = () => setIsVisible(prev => !prev)

  const { loginApi } = useActions()

  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Formik
            initialValues={{
              email: 'dmitry.dev.react@gmail.com',
              password: '123456789',
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
                  autoFocus
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
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>

                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={siVisible ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    onBlur={handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {siVisible ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />

                  {touched.email && (
                    <FormHelperText id="component-helper-text">
                      {errors.password}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />

                <Button
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

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>

            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
