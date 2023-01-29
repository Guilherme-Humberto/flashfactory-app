import styled, { css } from 'styled-components'
import ReactSelect, { GroupBase, StylesConfig } from 'react-select'
import { theme } from 'themes/primary'

export const customSelectStyles: StylesConfig<
  unknown,
  boolean,
  GroupBase<unknown>
> = {
  control: (base: any, state: any) => ({
    ...base,
    minHeight: '70px',
    border: 'none',
    boxShadow: 'none',
    fontSize: '18px',
    background: `${theme.colors.secondary2}`,
    padding: '0 10px'
  }),
  singleValue: (provided, props) => ({
    ...provided,
    color: `${theme.colors.white}`
  }),
  menu: (provided, props) => ({
    ...provided,
    fontSize: '18px',
    background: `${theme.colors.secondary2}`
  }),
  option: (provided: any, _state: any) => ({
    ...provided,
    fontSize: '18px',
    background: `${theme.colors.secondary2}`,

    '&:hover': {
      background: `${theme.colors.primary}`
    }
  }),
  placeholder: (provided: any, _state: any) => ({
    ...provided,
    color: '#6f6767',
    fontSize: '18px'
  })
}

export const Container = styled.div<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.4;
    `}

  input {
    position: absolute;
  }
`

export const SelectComponent = styled(ReactSelect)<{ margin?: string }>`
  margin: ${props => (props.margin ? props.margin : 0)};
`

export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
`
