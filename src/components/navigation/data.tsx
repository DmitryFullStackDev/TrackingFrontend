import AddIcon from '@mui/icons-material/Add'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import DetailsIcon from '@mui/icons-material/Details'
import PollIcon from '@mui/icons-material/Poll'
import SearchIcon from '@mui/icons-material/Search'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import React from 'react'
import { pages } from 'src/constants'

export const items = [
  {
    id: 1,
    name: 'Therapy',
    icon: <VolunteerActivismIcon />,
    link: pages.REGISTRATION,
  },
  {
    id: 2,
    name: 'Orthopedics',
    icon: <SettingsSuggestIcon />,
    link: pages.MAIN,
  },
  {
    id: 3,
    name: 'Surgery',
    icon: <DetailsIcon />,
    link: pages.MAIN,
  },
  {
    id: 4,
    name: 'Patients',
    icon: <AssignmentIndIcon />,
    link: null,
    submenu: [
      {
        id: 41,
        name: 'Add new',
        icon: <AddIcon />,
        link: '',
      },
      {
        id: 42,
        name: 'Search',
        icon: <SearchIcon />,
        link: '',
      },
      {
        id: 43,
        name: 'Statistics',
        icon: <PollIcon />,
        link: '',
      },
    ],
  },
]
