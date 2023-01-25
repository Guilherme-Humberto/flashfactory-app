import AdminHeader from '@/components/molecules/Admin/Header'
import AdminMenuNavigation from '@/components/molecules/Admin/MenuNavigation'
import { useAppContext } from '@/context/AppContext'
import React from 'react'
import * as Styles from './styles'

const Admin: React.FC = () => {
  const { user } = useAppContext()

  return (
    <Styles.Container className="constraint">
      <AdminHeader />
      <AdminMenuNavigation />
      <Styles.Presentation>
        <Styles.Title>Ola {user?.name}</Styles.Title>
        <Styles.SubTitle>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Styles.SubTitle>
      </Styles.Presentation>
    </Styles.Container>
  )
}

export default Admin
