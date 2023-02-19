import styled from 'styled-components'

export const Container = styled.div``
export const DeckInfo = styled.div`
  color: #cccccc6b;
`
export const FlashCardWrapper = styled.div``
export const FrontCard = styled.div`
  margin: 20px 0;
  font-size: 18px;
  max-width: 800px;
`
export const BackCard = styled.div`
  background: #2125285e;
  padding: 30px;
  margin: 20px 0;
  border: 2px solid #212528;

  small {
    color: #cccccc6b;
  }
`
export const CardFooter = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-top: 20px;
  border-top: 2px solid #212528;
`
export const CardFooterButton = styled.div`
  padding: 5px 30px;
  border-radius: 100px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.5s;

  &.is-error {
    background: ${props => `${props.theme.colors.danger}33`};
    color: ${props => props.theme.colors.danger};

    &:hover {
      background: ${props => `${props.theme.colors.danger}5e`};
    }
  }
  &.is-hard {
    background: ${props => `${props.theme.colors.warning}33`};
    color: ${props => props.theme.colors.warning};

    &:hover {
      background: ${props => `${props.theme.colors.warning}5e`};
    }
  }
  &.is-easy {
    background: ${props => `${props.theme.colors.success}33`};
    color: ${props => props.theme.colors.success};

    &:hover {
      background: ${props => `${props.theme.colors.success}5e`};
    }
  }
`
