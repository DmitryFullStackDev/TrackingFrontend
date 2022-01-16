import AccountCircle from '@mui/icons-material/AccountCircle'
import { Menu, MenuItem } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import React, { useState } from 'react'

export const AccountAvatar = () => {
  const [anchorEl, setAnchorEl] = useState<Element>(null)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>

        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>
    </div>
  )
}
