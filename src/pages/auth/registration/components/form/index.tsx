import { DesktopDatePicker, LocalizationProvider } from '@mui/lab'
import DateAdapter from '@mui/lab/AdapterDateFns'
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Link,
  Stack,
  TextField,
} from '@mui/material'
import Box from '@mui/material/Box'
import FormHelperText from '@mui/material/FormHelperText'
import { Form, Formik } from 'formik'
import React from 'react'
import { pages } from 'src/constants'
import { BoxStyled } from 'src/elements'
import { isEmpty } from 'src/utils'
import NavigationButtons from '../../../../../components/NavigationButtons'
import PasswordFields from '../../../../../components/PasswordFields'
import useActions from '../../store/useActions'
import { schema } from '../../validation'
import TextFields from './TextFields'

const RegistrationForm = () => {
  const { registrationApi } = useActions()

  return (
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
      validationSchema={schema}
      onSubmit={values => {
        registrationApi(values)
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
          <BoxStyled
            display="grid"
            gridTemplateColumns="1fr 1fr"
            columnGap="60px"
            displayMobile="block"
          >
            <Box>
              <TextFields
                touched={touched}
                errors={errors}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
              />
            </Box>

            <Box>
              <LocalizationProvider dateAdapter={DateAdapter}>
                <Box sx={{ mt: 2, mb: 1 }}>
                  <Stack spacing={0}>
                    <DesktopDatePicker
                      label="Date of Birth"
                      inputFormat="MM/dd/yyyy"
                      value={values.date}
                      onChange={arg => setFieldValue('date', arg)}
                      renderInput={params => (
                        <TextField
                          {...params}
                          error={Boolean(errors.date)}
                          helperText={errors.date}
                        />
                      )}
                    />
                  </Stack>
                </Box>
              </LocalizationProvider>

              <PasswordFields
                touched={touched}
                errors={errors}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
              />

              <FormControl error={Boolean(errors.termsAndConditions)} fullWidth>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={values.termsAndConditions}
                      color="primary"
                      onClick={handleChange('termsAndConditions')}
                    />
                  }
                  label={
                    <Link variant="inherit" component="button" type="button">
                      I have read and agree to the terms and conditions
                    </Link>
                  }
                />

                {Boolean(errors.termsAndConditions) && (
                  <FormHelperText>{errors.termsAndConditions}</FormHelperText>
                )}
              </FormControl>

              <Button
                disabled={!Boolean(isEmpty(errors))}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <NavigationButtons
                leftButton={pages.FORGOTPASSWORD}
                rightButton={pages.LOGIN}
                rightText="Sing In"
                leftText="Forgot password?"
              />
            </Box>
          </BoxStyled>
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm
