import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
`

export const LinkToGitHub = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const BtnLogOut = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.danger};
  }
`
