import styled from 'styled-components'

export const Box: any = styled.div`
  display: ${({ display }: any) => display || 'flex'};
  flex-direction: ${({ direction }: any) => direction || 'row'};
  width: ${({ width }: any) => (width ? `${width}` : 'auto')};
  min-width: ${({ minWidth }: any) => minWidth || ''};
  height: ${({ height }: any) => (height ? `${height}` : 'auto')};
  margin: ${({ margin }: any) => margin || 0};
  padding: ${({ padding }: any) => padding || 0};
  background: ${({ background }: any) => background || 'transparent'};
  justify-content: ${({ justify }: any) => justify || 'flex-start'};
  align-items: ${({ align }: any) => align || 'initial'};
  border: ${({ border }: any) => border || 'none'};
  border-radius: ${({ borderRadius }: any) => borderRadius || 'none'};
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

  grid-template-columns: ${({ gridTemplateColumns }: any) =>
    gridTemplateColumns};
  grid-row-gap: ${({ gridRowGap }: any) => gridRowGap};

  &:hover {
    background: ${({ backgroundHover }: any) => backgroundHover};
  }

  &::-webkit-scrollbar {
    width: 15px;
    background-color: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    border: 4px solid white;
    background-color: #c7c7c7;
  }
`
