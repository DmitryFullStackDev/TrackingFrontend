import { Grid, Link } from '@mui/material'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

type propsType = {
  leftButton: string
  rightButton: string
  leftText: string
  rightText: string
}

const NavigationButtons: FC<propsType> = ({
  leftButton,
  rightButton,
  leftText,
  rightText,
}) => {
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
          {leftText}
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
          {rightText}
        </Link>
      </Grid>
    </Grid>
  )
}

export default NavigationButtons
