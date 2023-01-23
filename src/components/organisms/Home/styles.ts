import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  place-items: center;
  min-height: 100vh;
`

export const Constraint = styled.div`
  text-align: center;
  max-width: 800px;
`

export const Title = styled.h1`
  font-size: 50px;
  line-height: 70px;
  margin-top: 20px;
`

export const SubTitle = styled.h2`
  font-size: 25px;
  margin: 30px 0;
  font-weight: 300;
  line-height: 40px;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const Button = styled.button`
  border-radius: 100px;
  padding: 20px 30px;
  font-size: 20px;
  font-weight: bold;
  transition: 0.5s;

  &.fill {
    background: ${props => props.theme.colors.primary};
  }
  &.outline {
    border: 2px solid ${props => props.theme.colors.primary};
    background: transparent;
  }

  &:hover {
    cursor: pointer;
    letter-spacing: 2px;
  }
`
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #0f1011b8;

  display: grid;
  place-items: center;
`
export const ModalContent = styled.div`
  position: relative;
  max-width: 100%;
  width: 950px;
  padding: 60px;
  border-radius: 10px;
  background: ${props => props.theme.colors.secondary};

  display: flex;
  flex-direction: column;
`

export const ModalBtnClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`

export const ModalTitle = styled.strong`
  width: 100%;
  font-size: 30px;
  margin-bottom: 20px;
`

export const ModalSubTitle = styled.span`
  font-weight: 300;
  font-size: 18px;
  line-height: 25px;
  max-width: 600px;
`

export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 10px 0;

  button {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
  }

  button:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.primary2};
  }
`
