import React, { useState } from 'react'
import Input from '@/components/atoms/Input'
import * as Global from '@/styles/global'
import * as Styles from './styles'
import { api } from '@/services/api'
import SelectForm from '@/components/atoms/Select'
import { ISelect } from '@/interfaces'

interface Props {
  fetchTrigger?: React.Dispatch<React.SetStateAction<boolean>>
  modalAction: React.Dispatch<React.SetStateAction<string>>
}

const statusOption = [
  { label: 'Ativo', value: true },
  { label: 'Inativo', value: false }
]

const DeckFormCreate: React.FC<Props> = ({ fetchTrigger, modalAction }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState<ISelect>(statusOption[1])

  const handleCreateNewDeck = async (event: React.FormEvent) => {
    try {
      event.preventDefault()

      await api.post('/deck/create', {
        title,
        description,
        status: status.value
      })

      if (fetchTrigger) fetchTrigger(true)
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
        <Styles.InputGroup>
          <Input
            required
            label="Qual o titulo do seu baralho?"
            type="text"
            value={title}
            placeholder="Titulo"
            setState={setTitle}
          />
          <SelectForm
            label="Status"
            value={status}
            options={statusOption}
            placeholder={'Status'}
            setState={setStatus}
          />
        </Styles.InputGroup>
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
          Salvar alterações
        </Global.ButtonDefault>
      </Styles.Form>
    </Styles.Container>
  )
}

export default DeckFormCreate
