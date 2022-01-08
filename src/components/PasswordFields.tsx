import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import FormHelperText from '@mui/material/FormHelperText'
import React, { useState } from 'react'

const PasswordFields = ({
  touched,
  errors,
  handleChange,
  handleBlur,
  values,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleClickShowPassword = () => setIsVisible(prev => !prev)

  const passwordFieldData = [
    {
      id: 'password',
      label: 'Password',
    },
    {
      id: 'confirmPassword',
      label: 'Confirm password',
    },
  ]
  return (
    <>
      {passwordFieldData.map(({ id, label }) => (
        <FormControl
          key={id}
          margin="normal"
          variant="outlined"
          fullWidth
          error={Boolean(touched[id] && errors[id])}
        >
          <InputLabel htmlFor={id}>{label}</InputLabel>

          <OutlinedInput
            id={id}
            type={isVisible ? 'text' : 'password'}
            value={values[id]}
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
            label={id}
          />

          {touched[id] && (
            <FormHelperText id="component-helper-text">
              {errors[id]}
            </FormHelperText>
          )}
        </FormControl>
      ))}
    </>
  )
}

export default PasswordFields
