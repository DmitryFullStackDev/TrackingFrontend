import PasswordIcon from '@mui/icons-material/Password'
import { Button, LinearProgress } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { green } from '@mui/material/colors'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import PasswordFields from 'src/components/PasswordFields'
import { pages } from 'src/constants'
import { useTypedSelector } from 'src/hooks'
import { getLoginToken, isEmpty } from 'src/utils'
import useActions from './store/useActions'
import { schema } from './validation'

export default function ResetPass() {
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
            onSubmit={values => {
              console.log(values)
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
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </>
  )
}
