import React from 'react'
import * as Styles from './styles'

interface InputProps {
  type: string
  label?: string
  value: string
  required?: boolean
  isMultiple?: boolean
  placeholder: string
  minHeight?: string
  setState: React.Dispatch<React.SetStateAction<string>>
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  label,
  minHeight,
  required,
  isMultiple,
  setState,
  placeholder
}) => {
  return (
    <Styles.Container>
      {label && <Styles.Label>{label}</Styles.Label>}
      {!isMultiple ? (
        <Styles.Input
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={e => setState(e.target.value)}
        />
      ) : (
        <Styles.TextArea
          minHeight={minHeight}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={e => setState(e.target.value)}
        />
      )}
    </Styles.Container>
  )
}

export default Input
