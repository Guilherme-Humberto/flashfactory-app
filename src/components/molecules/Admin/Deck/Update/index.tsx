import React, { useState } from 'react'
import Input from '@/components/atoms/Input'
import * as Global from '@/styles/global'
import * as Styles from './styles'
import { api } from '@/services/api'
import { IDeck, ISelect } from '@/interfaces'
import SelectForm from '@/components/atoms/Select'

interface Props {
  deckData: IDeck
  fetchTrigger?: React.Dispatch<React.SetStateAction<boolean>>
  modalAction: React.Dispatch<React.SetStateAction<string>>
}
const statusOption = [
  { label: 'Ativo', value: true },
  { label: 'Inativo', value: false }
]

const DeckFormUpdate: React.FC<Props> = ({
  fetchTrigger,
  deckData,
  modalAction
}) => {
  const [title, setTitle] = useState(deckData.title)
  const [description, setDescription] = useState(deckData.description)
  const [status, setStatus] = useState<ISelect>(
    statusOption.find(item => item.value === (deckData.status == 1)) as ISelect
  )

  const handleCreateNewDeck = async (event: React.FormEvent) => {
    try {
      event.preventDefault()

      await api.put(`/deck/update/${deckData.id}`, {
        title,
        description,
        status: status?.value
      })

      if (fetchTrigger) fetchTrigger(true)
      return modalAction('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Styles.Container>
      <Styles.Title>Atualizar baralho</Styles.Title>
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

export default DeckFormUpdate
