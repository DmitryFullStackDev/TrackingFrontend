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
import { isEmpty } from 'src/utils'
import useActions from '../store/useActions'
import { schema } from '../validation'
import PasswordFields from './PasswordFields'
import TextFields from './TextFields'

const RegistrationForm = () => {
  const { registraionApi } = useActions()

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
          <TextFields
            touched={touched}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
          />

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
                <Link
                  variant="inherit"
                  component="button"
                  type="button"
                  onClick={() => {
                    console.log(1)
                  }}
                >
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
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm
