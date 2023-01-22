import React from 'react'
import Link from 'next/link'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '@styles/global'

import { Container } from './styles'

const Socials: React.FC = () => {
  return (
    <Container>
      <Link passHref href="#">
        <FacebookIcon />
      </Link>
      <Link passHref href="#">
        <InstagramIcon />
      </Link>
      <Link passHref href="#">
        <WhatsAppIcon />
      </Link>
    </Container>
  )
}

export default Socials
