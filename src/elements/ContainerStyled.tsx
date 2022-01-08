import { Container } from '@mui/material'
import styled from 'styled-components'

export const ContainerStyled: any = styled(Container)`
  max-width: 1000px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    max-width: 300px;
  }
`
