import React, { useState } from 'react'
import Input from '@/components/atoms/Input'
import * as Global from '@/styles/global'
import * as Styles from './styles'
import { api } from '@/services/api'
import { useAppContext } from '@/context/AppContext'

interface Props {
  modalAction: React.Dispatch<React.SetStateAction<string>>
}

const DeckFormCreate: React.FC<Props> = ({ modalAction }) => {
  const { user } = useAppContext()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleCreateNewDeck = async (event: React.FormEvent) => {
    try {
      event.preventDefault()

      await api.post('/deck/create', {
        title,
        description,
        user: user.id
      })

      return modalAction('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Styles.Container>
      <Styles.Title>Criar baralho</Styles.Title>
      <Styles.SubTitle>
        Um baralhos permitem organizar os seus flashcards. <br /> Preencha as
        informações abaixo para criar um novo baralho.
      </Styles.SubTitle>
      <Styles.Form onSubmit={handleCreateNewDeck}>
        <Input
          required
          label="Qual o titulo do seu baralho?"
          type="text"
          value={title}
          placeholder="Titulo"
          setState={setTitle}
        />
        <Input
          required
          isMultiple
          label="Descrição"
          type="text"
          value={description}
          placeholder="Descreva os principais objetivos do seu baralho de forma simples e objetiva"
          setState={setDescription}
        />
        <Global.ButtonDefault
          type="submit"
          className="fill"
          style={{ width: '100%' }}
        >
          Criar baralho
        </Global.ButtonDefault>
      </Styles.Form>
    </Styles.Container>
  )
}

export default DeckFormCreate
