import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
`
export const Input = styled.input`
  width: 100%;
  padding: 20px 30px;
  background: #1c2024;
  font-size: 18px;
  border-radius: 5px;

  &::placeholder {
    color: #6f6767;
  }
`
export const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 20px 30px;
  background: #1c2024;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  outline: none;
  resize: none;

  &::placeholder {
    color: #6f6767;
  }
`
