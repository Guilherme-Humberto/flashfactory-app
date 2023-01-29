import Logo from '@/components/atoms/Logo'
import React from 'react'
import * as Styles from './styles'
import * as Global from '@/styles/global'
import { api } from '@/services/api'
import { useRouter } from 'next/router'
import { clearAllCoookies } from '@/utils/cookies'

const AdminHeader: React.FC = () => {
  const router = useRouter()

  const handleLogOutSession = async () => {
    clearAllCoookies()
    await api.post('/auth/logout', null)
    return router.push('/')
  }

  return (
    <Styles.Container>
      <Logo />
      <Styles.OptionsWrapper>
        <Styles.LinkToGitHub>
          <Global.IconFI.FiGithub size={25} />
          <p>Visitar projeto</p>
        </Styles.LinkToGitHub>
        <Styles.BtnLogOut onClick={handleLogOutSession}>
          <Global.IconFI.FiLogOut size={25} />
        </Styles.BtnLogOut>
      </Styles.OptionsWrapper>
    </Styles.Container>
  )
}

export default AdminHeader
