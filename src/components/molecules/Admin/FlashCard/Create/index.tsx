import React, { useState } from 'react'
import Input from '@/components/atoms/Input'
import * as Global from '@/styles/global'
import * as Styles from './styles'
import { api } from '@/services/api'
import { useRouter } from 'next/router'

interface Props {
  deckId: number
  modalAction: React.Dispatch<React.SetStateAction<string>>
}

const FlashCardFormCreate: React.FC<Props> = ({ deckId, modalAction }) => {
  const router = useRouter()

  const [front, setFront] = useState('')
  const [back, setBack] = useState('')
  const [tagContent, setTagContent] = useState<string>('')
  const [tagList, setTagList] = useState<string[]>([])
  const [activeInputTag, setActiveInputTag] = useState(false)

  const handleCreateNewDeck = async (event: React.FormEvent) => {
    try {
      event.preventDefault()

      await api.post('/flashcard/create', {
        front,
        back,
        deck: deckId
      })

      modalAction('')
      return router.reload()
    } catch (error) {
      console.log(error)
    }
  }

  const addNewTagInList = () => {
    setTagContent('')
    return setTagList([...tagList, tagContent])
  }

  const saveNewTagContent = () => {
    if (tagContent.length == 0) return setActiveInputTag(state => !state)
    return addNewTagInList()
  }

  return (
    <Styles.Container>
      <Styles.Title>Criar novo flashcard</Styles.Title>
      <Styles.SubTitle>
        Um baralhos permitem organizar os seus flashcards. <br /> Preencha as
        informações abaixo para criar um novo baralho.
      </Styles.SubTitle>
      <Styles.Form onSubmit={handleCreateNewDeck}>
        <Input
          required
          isMultiple
          label="Frente do card"
          type="text"
          minHeight="120px"
          value={front}
          placeholder="Descreva o que estará visivel no lado frontal do card"
          setState={setFront}
        />
        <Input
          required
          isMultiple
          label="Verso do card"
          type="text"
          minHeight="120px"
          value={back}
          placeholder="Descreva o que estará visivel no verso do card"
          setState={setBack}
        />
        <Styles.TagsWrapper>
          <label>Adicionar tags</label>
          <Styles.TagsList>
            {tagList.map(tag => (
              <Styles.TagItem>{tag}</Styles.TagItem>
            ))}
            <Styles.TagsInputAdd>
              <Styles.TagsBtnAdd
                onClick={saveNewTagContent}
                hasSave={tagContent.length > 1}
                hasClose={tagContent.length == 0 && activeInputTag}
              >
                {tagContent.length == 0 ? (
                  activeInputTag ? (
                    <Global.IconFI.FiX size={20} />
                  ) : (
                    <Global.IconFI.FiPlus size={20} />
                  )
                ) : (
                  <Global.IconFI.FiCheck size={20} />
                )}
              </Styles.TagsBtnAdd>
              <Styles.InputTag
                type="text"
                placeholder="conteúdo"
                value={tagContent}
                activeInput={activeInputTag}
                onChange={event => setTagContent(event.target.value)}
              />
            </Styles.TagsInputAdd>
          </Styles.TagsList>
        </Styles.TagsWrapper>
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

export default FlashCardFormCreate
