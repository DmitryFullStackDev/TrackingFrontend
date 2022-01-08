import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { Link } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { green } from '@mui/material/colors'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { pages } from 'src/constants'
import { BoxStyled } from 'src/elements'
import { sendStatusType } from 'src/types'

type sendPopUpType = {
  sendStatus: sendStatusType
  setSendStatus(value: sendStatusType): void
}

const SendPopUp: FC<sendPopUpType> = ({ sendStatus, setSendStatus }) => {
  const history = useHistory()

  useEffect(() => {
    if (sendStatus === 'done') {
      setTimeout(() => history.push(pages.LOGIN), 5000)
    }
  }, [])

  return (
    <Modal
      open={sendStatus !== 'waiting'}
      onClose={() => setSendStatus('waiting')}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyled
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        background="white"
        borderRadius="4px"
        boxShadow="24"
        direction="column"
        align="center"
        padding="30px"
        maxWidthMobile="90%"
        maxWidth="400px"
      >
        {sendStatus === 'sending' && (
          <CircularProgress sx={{ color: green[500], fontSize: 50 }} />
        )}

        {sendStatus === 'done' && (
          <CheckCircleOutlineIcon sx={{ color: green[500], fontSize: 50 }} />
        )}

        <Typography
          mt={2}
          mb={2}
          textAlign="center"
          variant="body1"
          gutterBottom
        >
          The reset password link was send to your email
        </Typography>

        <Link
          variant="inherit"
          component="button"
          onClick={() => {
            history.push(pages.LOGIN)
          }}
        >
          Back to Sign In
        </Link>
      </BoxStyled>
    </Modal>
  )
}

export default SendPopUp
