import React, { useState } from 'react'
import Input from '@/components/atoms/Input'
import * as Global from '@/styles/global'
import * as Styles from './styles'
import { IFlashcard, ITag } from '@/interfaces'
import { theme } from 'themes/primary'

interface Props {
  card: Partial<IFlashcard>
  handleEditExistFlashCard: (data: {
    card: Partial<IFlashcard>
    tags: Partial<ITag[]>
  }) => Promise<void>
}

const FlashCardFormUpdate: React.FC<Props> = ({
  card,
  handleEditExistFlashCard
}) => {
  const [front, setFront] = useState<string>(String(card.front))
  const [back, setBack] = useState<string>(String(card.back))
  const [tagContent, setTagContent] = useState<string>('')
  const [tagContentColor, setTagContentColor] = useState<string>(
    theme.colors.primary
  )
  const [tagList, setTagList] = useState<ITag[]>(card?.tags as ITag[])
  const [activeInputTag, setActiveInputTag] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault()
      await handleEditExistFlashCard({ card: { front, back }, tags: tagList })
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

  const removeExistsTag = (title: string, color: string) => {
    const existTag = tagList.find(
      tag => tag.title === title && tag.color === color
    )

    if (existTag) {
      const removeTag = tagList.filter(tag => tag.title !== title)
      return setTagList([...removeTag])
    }
  }

  return (
    <Styles.Container>
      <Styles.Title>Editar flashcard</Styles.Title>
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
                onClick={() => removeExistsTag(tag.title, tag.color)}
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

export default FlashCardFormUpdate
