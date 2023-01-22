import React from 'react'
import Link from 'next/link'
import { Container } from './styles'
import Socials from '@components/molecules/Socials'

const Header: React.FC = () => {
  return (
    <Container className="constraint">
      <h1 className="logo">MyCafe</h1>
      <div className="links">
        <nav>
          <Link passHref href="#">
            Sobre
          </Link>
          <Link passHref href="#">
            Avaliações
          </Link>
          <Link passHref href="#">
            Nossos serviços
          </Link>
        </nav>
        <Socials />
      </div>
    </Container>
  )
}

export default Header
