import React, { useState } from 'react'
import Input from '@/components/atoms/Input'
import * as Global from '@/styles/global'
import * as Styles from './styles'
import { IFlashcard, ITag } from '@/interfaces'
import { theme } from 'themes/primary'

interface Props {
  handleCreateFlashCard: (data: {
    card: Partial<IFlashcard>
    tags: Partial<ITag[]>
  }) => Promise<void>
}

const FlashCardFormCreate: React.FC<Props> = ({ handleCreateFlashCard }) => {
  const [front, setFront] = useState('')
  const [back, setBack] = useState('')
  const [tagContent, setTagContent] = useState<string>('')
  const [tagContentColor, setTagContentColor] = useState<string>(
    theme.colors.primary
  )
  const [tagList, setTagList] = useState<ITag[]>([])
  const [activeInputTag, setActiveInputTag] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault()
      await handleCreateFlashCard({ card: { front, back }, tags: tagList })
    } catch (error) {
      console.log(error)
    }
  }

  const addNewTagInList = () => {
    setTagContent('')
    setTagContentColor(theme.colors.primary)

    const tagData = { title: tagContent, color: tagContentColor }
    return setTagList([...tagList, tagData])
  }

  const saveNewTag = () => {
    if (tagContent.length == 0) return setActiveInputTag(state => !state)
    return addNewTagInList()
  }

  const removeExistsTag = (tagItem: ITag) => {
    const findTag = tagList.find(
      tag => tag.title === tagItem.title && tag.color === tagItem.color
    )

    if (findTag) {
      const removeTag = tagList.filter(
        tag => tag.title !== tagItem.title && tag.color !== tagItem.color
      )
      return setTagList([...removeTag])
    }
  }

  return (
    <Styles.Container>
      <Styles.Title>Criar novo flashcard</Styles.Title>
      <Styles.SubTitle>
        Um baralhos permitem organizar os seus flashcards. <br /> Preencha as
        informações abaixo para criar um novo baralho.
      </Styles.SubTitle>
      <Styles.Form onSubmit={handleSubmit}>
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
            {tagList.map((tag, index) => (
              <Styles.TagItem
                key={index}
                style={{ color: tag.color }}
                onClick={() => removeExistsTag(tag)}
              >
                {tag.title}
              </Styles.TagItem>
            ))}
            <Styles.TagsInputAdd>
              <Styles.TagsBtnAdd
                onClick={saveNewTag}
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
              <Styles.InputGroup activeInput={activeInputTag}>
                <Styles.InputTag
                  type="text"
                  placeholder="conteúdo"
                  value={tagContent}
                  onChange={event => setTagContent(event.target.value)}
                />
                <Styles.InputColorTagWrapper>
                  <Styles.InputColorTag
                    type="color"
                    value={tagContentColor}
                    onChange={event => setTagContentColor(event.target.value)}
                  />
                </Styles.InputColorTagWrapper>
              </Styles.InputGroup>
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
