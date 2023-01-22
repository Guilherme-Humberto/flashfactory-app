import React, { useState } from 'react'
import * as IconFI from 'react-icons/fi'
import * as IconAI from 'react-icons/ai'
import * as Styles from './styles'
import Logo from '@/components/atoms/Logo'
import Input from '@/components/atoms/Input'

const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
                <button>
                  <IconAI.AiFillGithub size={25} /> Entrar com Github
                </button>
                <button>
                  <IconAI.AiFillGoogleCircle size={25} /> Entrar com Google
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
