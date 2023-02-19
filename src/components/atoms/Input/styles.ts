import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .ql-toolbar.ql-snow {
    border: none;
  }
`
export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #cccccc80;
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
export const Editor = styled.div`
  background: #1c2024;
  outline: none !important;
  border: none !important;
  height: 100px;
`
