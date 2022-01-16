import AccountCircle from '@mui/icons-material/AccountCircle'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import MenuIcon from '@mui/icons-material/Menu'
import { Container, CssBaseline, List, Menu, MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import React, { FC, ReactNode, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AppBar, Drawer, SubMenu } from 'src/components/navigation/components'
import { items } from './../../components/navigation/data'

type PropsType = {
  children?: ReactNode
  dashboardChildren?: ReactNode
}

const Navigation: FC<PropsType> = ({ children, dashboardChildren }) => {
  const history = useHistory()

  const [open, setOpen] = useState<boolean>(true)
  const [anchorEl, setAnchorEl] = useState<Element>(null)

  const toggleDrawer = () => {
    setOpen(!open)
  }
  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px',
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            {dashboardChildren && (
              <Box sx={{ flexGrow: 1 }}>{dashboardChildren}</Box>
            )}

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
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>

          <Divider />
          <List>
            <div>
              {items.map(data => {
                const { link, id, name, icon } = data

                if (Boolean(link)) {
                  return (
                    <ListItem
                      key={id}
                      button
                      onClick={() => history.push({ pathname: link })}
                    >
                      <ListItemIcon>{icon}</ListItemIcon>

                      <ListItemText primary={name} />
                    </ListItem>
                  )
                }
                return <SubMenu key={id} data={data} />
              })}
            </div>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: theme =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {children}
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Navigation
