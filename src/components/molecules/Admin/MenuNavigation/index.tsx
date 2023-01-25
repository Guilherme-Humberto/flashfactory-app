import React from 'react'
import * as Styles from './styles'
import { useRouter } from 'next/router'

const links = [
  {
    name: 'Página Inicial',
    link: '/admin'
  },
  {
    name: 'Baralhos',
    link: '#'
  }
]

const AdminMenuNavigation: React.FC = () => {
  const router = useRouter()
  return (
    <Styles.Container>
      <Styles.MenuList>
        {links.map((item, index) => (
          <Styles.MenuItem key={index} active={router.pathname == item.link}>
            {item.name}
          </Styles.MenuItem>
        ))}
      </Styles.MenuList>
    </Styles.Container>
  )
}

export default AdminMenuNavigation
