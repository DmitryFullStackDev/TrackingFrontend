import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab'
import DateAdapter from '@mui/lab/AdapterDateFns'
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  LinearProgress,
  Link,
  OutlinedInput,
  Stack,
  TextField,
} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import FormHelperText from '@mui/material/FormHelperText'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { pages } from 'src/constants'
import useActions from './store/useActions'

const Registration = () => {
  const { registraionApi } = useActions()

  const [isVisible, setIsVisible] = useState(false)

  const history = useHistory()

  const handleClickShowPassword = () => setIsVisible(prev => !prev)

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

          <Formik
            initialValues={{
              email: '',
              password: '',
              name: '',
              surname: '',
              lastName: '',
              phone: '',
              confirmPassword: '',
              date: new Date(),
              termsAndConditions: false,
            }}
            /*             validationSchema={schema} */
            onSubmit={values => {
              console.log(values)
            }}
          >
            {({
              setFieldValue,
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
            }) => (
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

                <TextField
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  margin="normal"
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />

                <TextField
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  margin="normal"
                  fullWidth
                  id="surname"
                  label="Surname"
                  name="surname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.surname}
                />

                <TextField
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  margin="normal"
                  fullWidth
                  id="lastName"
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />

                <LocalizationProvider dateAdapter={DateAdapter}>
                  <Box sx={{ mt: 2, mb: 1 }}>
                    <Stack spacing={1}>
                      <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="MM/dd/yyyy"
                        value={values.date}
                        onChange={arg => setFieldValue('date', arg)}
                        renderInput={params => <TextField {...params} />}
                      />
                    </Stack>
                  </Box>
                </LocalizationProvider>

                <TextField
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  margin="normal"
                  fullWidth
                  id="phone"
                  label="Contact phone"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
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
                    onChange={handleChange('password')}
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

                  {touched.email && (
                    <FormHelperText id="component-helper-text">
                      {errors.password}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                >
                  <InputLabel htmlFor="confirmPassword">
                    Confirm password
                  </InputLabel>

                  <OutlinedInput
                    id="confirmPassword"
                    type={isVisible ? 'text' : 'password'}
                    value={values.confirmPassword}
                    onChange={handleChange('confirmPassword')}
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
                    label="confirmPassword"
                  />

                  {touched.email && (
                    <FormHelperText id="component-helper-text">
                      {errors.password}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl
                  error={Boolean(errors.termsAndConditions)}
                  fullWidth
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={values.termsAndConditions}
                        color="primary"
                        onClick={handleChange('termsAndConditions')}
                      />
                    }
                    label={
                      <Link
                        variant="inherit"
                        component="button"
                        onClick={() => {
                          console.log(1)
                        }}
                      >
                        I have read and agree to the terms and conditions
                      </Link>
                    }
                  />

                  {Boolean(errors.termsAndConditions) && (
                    <FormHelperText>You can display an error</FormHelperText>
                  )}
                </FormControl>

                <Button
                  disabled={false}
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
