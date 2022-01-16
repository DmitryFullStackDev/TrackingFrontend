import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Collapse, List } from '@mui/material'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'

type ProrsType = {
  data:
    | {
        id: number
        name: string
        icon: JSX.Element
        link: string
        submenu?: undefined
      }
    | {
        id: number
        name: string
        icon: JSX.Element
        link: any
        submenu: {
          id: number
          name: string
          icon: JSX.Element
          link: string
        }[]
      }
}

export const SubMenu: FC<ProrsType> = ({ data }) => {
  const history = useHistory()

  const [open, setOpen] = useState<boolean>(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>{data.icon}</ListItemIcon>

        <ListItemText primary={data.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {data.submenu.map(({ id, icon, name, link }) => (
            <ListItem
              onClick={() => history.push({ pathname: link })}
              button
              sx={{ pl: 4 }}
              key={id}
            >
              <ListItemIcon>{icon}</ListItemIcon>

              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  )
}
