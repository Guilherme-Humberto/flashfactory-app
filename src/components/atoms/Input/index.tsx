import React, { useEffect } from 'react'
import * as Styles from './styles'
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'

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
  const modules = {
    toolbar: [['bold', 'italic', 'underline', 'strike']]
  }

  const { quill, quillRef } = useQuill({ modules })

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(value)
      quill.on('text-change', () => setState(quill.root.innerHTML))
    }
  }, [quill])

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
        <Styles.Editor ref={quillRef} />
      )}
    </Styles.Container>
  )
}

export default Input
