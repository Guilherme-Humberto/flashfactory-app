import { IconFI } from '@/styles/global'
import React from 'react'
import * as Styles from './styles'

interface Props {
  children: React.ReactNode
  eventClose: () => void
}

const ModalComponent: React.FC<Props> = ({ children, eventClose }) => {
  return (
    <Styles.Container>
      <Styles.ModalContent>
        <Styles.ButtonClose onClick={eventClose}>
          <IconFI.FiX size={30} />
        </Styles.ButtonClose>
        {children}
      </Styles.ModalContent>
    </Styles.Container>
  )
}

export default ModalComponent
