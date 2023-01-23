import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import * as IconFI from 'react-icons/fi'
import * as IconAI from 'react-icons/ai'
import * as Styles from './styles'
import Logo from '@/components/atoms/Logo'
import Input from '@/components/atoms/Input'
import { githubBaseUrl, googleBaseUrl } from '@/configs/auth'
import { clearAllCoookies, getCookie } from '@/utils/cookies'

const Home: React.FC = () => {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [openModal, setOpenModal] = useState('')

  const handleAuthWithGitHub = async () => {
    clearAllCoookies()
    return router.push(githubBaseUrl())
  }

  const handleAuthWithGoogle = async () => {
    clearAllCoookies()
    return router.push(googleBaseUrl())
  }

  const checkIsAuthenticated = () => {
    const isAuthenticated = getCookie('user.token')
    if (isAuthenticated.status) return router.push('/admin')
  }

  useEffect(() => {
    checkIsAuthenticated()
  }, [])

  return (
    <Styles.Container>
      <Styles.Constraint>
        <Logo />
        <Styles.Title>
          Gerenciamento de squads e projetos de alta performance{' '}
        </Styles.Title>
        <Styles.SubTitle>
          Perfeito para gerenciamento de times e projetos de forma simples.
          Foque na produtividade no seu dia a dia.
        </Styles.SubTitle>
        <Styles.Buttons>
          <Styles.Button
            className="fill"
            onClick={() => setOpenModal('create-account')}
          >
            Criar minha conta
          </Styles.Button>
          <Styles.Button
            className="outline"
            onClick={() => setOpenModal('login-account')}
          >
            Acessar minha conta
          </Styles.Button>
        </Styles.Buttons>
      </Styles.Constraint>
      {openModal === 'create-account' && (
        <Styles.ModalContainer>
          <Styles.ModalContent>
            <Styles.ModalBtnClose onClick={() => setOpenModal('')}>
              <IconFI.FiX size={25} />
            </Styles.ModalBtnClose>
            <Styles.ModalTitle>Criar Conta</Styles.ModalTitle>
            <Styles.ModalSubTitle>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              corrupti veritatis enim beatae possimus accusamus!
            </Styles.ModalSubTitle>
            <Styles.Form>
              <Input
                type="text"
                value={name}
                placeholder="Informe seu nome"
                setState={setName}
              />
              <Input
                type="email"
                value={email}
                placeholder="Informe seu email"
                setState={setEmail}
              />
              <Input
                type="password"
                value={password}
                placeholder="Informe sua senha"
                setState={setPassword}
              />
              <Styles.SocialsWrapper>
                <button type="button" onClick={handleAuthWithGitHub}>
                  <IconAI.AiFillGithub size={25} /> Acessar com Github
                </button>
                <button type="button" onClick={handleAuthWithGoogle}>
                  <IconAI.AiFillGoogleCircle size={25} /> Acessar com Google
                </button>
              </Styles.SocialsWrapper>
              <Styles.Button
                type="submit"
                className="fill"
                onClick={() => setOpenModal('create-account')}
              >
                Criar minha conta
              </Styles.Button>
            </Styles.Form>
          </Styles.ModalContent>
        </Styles.ModalContainer>
      )}
    </Styles.Container>
  )
}

export default Home
