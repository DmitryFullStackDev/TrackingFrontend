import { Grid, Link } from '@mui/material'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

type propsType = {
  leftButton: string
  rightButton: string
}

const NavigationButtons: FC<propsType> = ({ leftButton, rightButton }) => {
  const history = useHistory()

  return (
    <Grid mt={1.7} container>
      <Grid item xs>
        <Link
          component="button"
          variant="body2"
          onClick={() => {
            history.push(leftButton)
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
            history.push(rightButton)
          }}
        >
          Sign In
        </Link>
      </Grid>
    </Grid>
  )
}

export default NavigationButtons
