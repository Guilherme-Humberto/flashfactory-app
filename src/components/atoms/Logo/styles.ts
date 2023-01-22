import styled from 'styled-components'

export const Container = styled.div`
  font-weight: 600;
  font-size: 30px;

  .second {
    color: ${props => props.theme.colors.primary};
  }
`
