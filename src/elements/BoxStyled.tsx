import styled from 'styled-components'

export const BoxStyled: any = styled.div`
  display: ${({ display }: any) => display || 'flex'};
  flex-direction: ${({ direction }: any) => direction || 'row'};
  width: ${({ width }: any) => (width ? `${width}` : '100%')};
  min-width: ${({ minWidth }: any) => minWidth || ''};
  height: ${({ height }: any) => (height ? `${height}` : 'auto')};
  margin: ${({ margin }: any) => margin || 0};
  padding: ${({ padding }: any) => padding || 0};
  background: ${({ background }: any) => background || 'transparent'};
  justify-content: ${({ justify }: any) => justify || 'flex-start'};
  align-items: ${({ align }: any) => align || 'initial'};
  border: ${({ border }: any) => border || 'none'};
  border-radius: ${({ borderRadius }: any) => borderRadius || 'none'};
  transform: ${({ transform }: any) => transform || 'none'};
  flex-wrap: ${({ wrap }: any) => wrap || 'nowrap'};
  overflow: ${({ overflow }: any) => overflow};
  cursor: ${({ cursor }: any) => cursor};
  position: ${({ relative, position }: any) =>
    (relative && 'relative') || position};
  text-align: ${({ textAlign }: any) => textAlign || 'left'};
  opacity: ${({ opacity }: any) => opacity || '1'};
  border-bottom: ${({ borderBottom }: any) => borderBottom || ''};
  color: ${({ color }: any) => color};
  top: ${({ top }: any) => top};
  left: ${({ left }: any) => left};
  right: ${({ right }: any) => right};
  box-shadow: ${({ shadow }: any) => shadow || ''};
  user-select: ${({ userSelect }: any) => userSelect};
  max-height: ${({ maxHeight }: any) => maxHeight};
  overflow-y: ${({ overflowY }: any) => overflowY};
  box-shadow: ${({ boxShadow }: any) => boxShadow};
  max-width: ${({ maxWidth }: any) => maxWidth || 'auto'};
  outline: none;

  grid-template-columns: ${({ gridTemplateColumns }: any) =>
    gridTemplateColumns};
  grid-row-gap: ${({ gridRowGap }: any) => gridRowGap};
  column-gap: ${({ columnGap }: any) => columnGap};

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    max-width: ${({ maxWidthMobile }: any) => maxWidthMobile};
    display: ${({ displayMobile }: any) => displayMobile || 'flex'};
  }
`
