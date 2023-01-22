import React from 'react'
import * as Styles from './styles'

const Logo: React.FC = () => {
  return (
    <Styles.Container>
      <span className="first">
        My<span className="second">Flashcards</span>
      </span>
    </Styles.Container>
  )
}

export default Logo
