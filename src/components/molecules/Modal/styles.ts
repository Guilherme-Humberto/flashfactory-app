import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(18, 20, 21, 0.97);

  display: grid;
  place-items: center;
`

export const ModalContent = styled.div`
  position: relative;
  padding: 50px;
  width: 900px;
  max-width: 100%;
  border-radius: 10px;
  background: ${props => props.theme.colors.secondary};
`

export const ButtonClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`
