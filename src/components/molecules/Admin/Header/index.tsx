import Logo from '@/components/atoms/Logo'
import React from 'react'
import * as Styles from './styles'
import * as Global from '@/styles/global'

const AdminHeader: React.FC = () => {
  return (
    <Styles.Container>
      <Logo />
      <Styles.LinkToGitHub>
        <Global.IconFI.FiGithub size={25} />
        <p>Visitar projeto</p>
      </Styles.LinkToGitHub>
    </Styles.Container>
  )
}

export default AdminHeader
