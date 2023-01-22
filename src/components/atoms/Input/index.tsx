import React from 'react'
import * as Styles from './styles'

interface InputProps {
  type: string
  label?: string
  value: string
  placeholder: string
  setState: React.Dispatch<React.SetStateAction<string>>
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  label,
  setState,
  placeholder
}) => {
  return (
    <Styles.Container>
      {label && <Styles.Label>{label}</Styles.Label>}
      <Styles.Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => setState(e.target.value)}
      />
    </Styles.Container>
  )
}

export default Input
