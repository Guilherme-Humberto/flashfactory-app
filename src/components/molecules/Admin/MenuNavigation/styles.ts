import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.colors.secondary2};
`
export const MenuList = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`
export const MenuItem = styled.span<{ active: boolean }>`
  padding: 20px 0;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 3px solid transparent;

  ${props =>
    props.active &&
    css`
      border-bottom-color: ${props => props.theme.colors.primary};
    `}

  &:hover {
    cursor: pointer;
    border-bottom-color: ${props => props.theme.colors.primary};
  }
`
