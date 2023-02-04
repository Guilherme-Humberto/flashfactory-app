import styled, { css } from 'styled-components'

export const Container = styled.div``
export const Title = styled.h3`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 30px;

  &:before {
    content: '';
    display: block;
    width: 10px;
    height: 20px;
    background: ${props => props.theme.colors.primary};
  }
`
export const SubTitle = styled.small`
  display: block;
  font-size: 18px;
  font-weight: 300;
  margin: 10px 0;
  line-height: 25px;
`
export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const TagsWrapper = styled.div`
  label {
    display: block;
    font-size: 16px;
    font-weight: 500;
    color: #cccccc80;
    margin-bottom: 10px;
  }
`
export const TagsBtnAdd = styled.div<{ hasSave?: boolean; hasClose?: boolean }>`
  position: relative;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background: ${props => props.theme.colors.primary};
  transition: 0.5s;
  cursor: pointer;

  ${props =>
    props.hasSave &&
    css`
      background: ${props.theme.colors.success};
    `}

  ${props =>
    props.hasClose &&
    css`
      background: ${props.theme.colors.danger};
    `}
`
export const TagsInputAdd = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const InputTag = styled.input<{ activeInput: boolean }>`
  position: absolute;
  left: 0;
  z-index: 1;
  display: block;
  padding-left: ${props => (props.activeInput ? '50px' : 'none')};
  font-size: 16px;
  height: 35px;
  background: #1c2024;
  border-radius: 100px;
  width: ${props => (props.activeInput ? '200px' : '40px')};
  transition: 0.5s;

  &::placeholder {
    color: #6f6767;
  }
`
export const TagsList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const TagItem = styled.div``
