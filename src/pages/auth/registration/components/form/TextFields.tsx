import { TextField } from '@mui/material'
import React from 'react'

const TextFields = ({ touched, errors, handleChange, handleBlur, values }) => {
  const textFieldData = [
    {
      id: 'email',
      label: 'Email Address',
    },
    {
      id: 'name',
      label: 'Name',
    },
    {
      id: 'surname',
      label: 'Surname',
    },
    {
      id: 'lastName',
      label: 'Last name',
    },
    {
      id: 'phone',
      label: 'Contact phone',
    },
  ]

  return (
    <>
      {textFieldData.map(({ id, label }) => (
        <TextField
          key={id}
          error={Boolean(touched[id] && errors[id])}
          helperText={touched[id] && errors[id]}
          margin="normal"
          fullWidth
          id={id}
          label={label}
          name={id}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[id]}
        />
      ))}
    </>
  )
}

export default TextFields
