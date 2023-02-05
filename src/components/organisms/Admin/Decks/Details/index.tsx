import React, { useState } from 'react'
import { IDeck, IFlashcard, ITag } from '@/interfaces'
import * as Styles from './styles'
import AdminHeader from '@/components/molecules/Admin/Header'
import AdminMenuNavigation from '@/components/molecules/Admin/MenuNavigation'
import Input from '@/components/atoms/Input'
import ModalComponent from '@/components/molecules/Modal'
import FlashCardFormCreate from '@/components/molecules/Admin/FlashCard/Create'
import FlashCardItem from '@/components/molecules/Admin/FlashCard/CardItem'
import { api } from '@/services/api'

interface Props {
  deck: IDeck
  flashcards: IFlashcard[]
  fetchTrigger: React.Dispatch<React.SetStateAction<boolean>>
}

const DeckDetails: React.FC<Props> = ({ deck, flashcards, fetchTrigger }) => {
  const [searchDeck, setSearchDeck] = useState<string>('')
  const [modalAction, setModalAction] = useState<string>('')

  const handleDeleteFlashCard = async (cardId: number) => {
    await api.delete(`/flashcard/delete/${cardId}/deck/${deck.id}`)
    return fetchTrigger(true)
  }

  const handleCreateFlashCardTags = async (
    cardId: number,
    tagList: Partial<ITag[]>
  ) => {
    const response = tagList.map(async tag => {
      return await api.post('/tag/create', {
        title: tag?.title,
        color: tag?.color,
        flashcard: cardId
      })
    })

    return await Promise.all(response)
  }

  const handleCreateNewFlashCard = async (props: {
    card: Partial<IFlashcard>
    tags: Partial<ITag[]>
  }) => {
    try {
      const { data: response } = await api.post('/flashcard/create', {
        front: props.card.front,
        back: props.card.back,
        deck: deck.id
      })

      if (props.tags.length > 0 && response.id) {
        await handleCreateFlashCardTags(response.id, props.tags)
      }

      setModalAction('')
      fetchTrigger(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Styles.Container className="constraint">
        <AdminHeader />
        <AdminMenuNavigation />
        <Styles.Presentation>
          <div>
            <Styles.Title>{deck.title}</Styles.Title>
            <Styles.SubTitle>{deck.description}</Styles.SubTitle>
          </div>
          <Styles.DeckActionsWrapper>
            <Input
              type="text"
              value={searchDeck}
              placeholder="Informe o titulo do card"
              setState={setSearchDeck}
            />
            <Styles.ButtonNewDeck
              className="fill"
              onClick={() => setModalAction('create-card')}
            >
              Novo Card
            </Styles.ButtonNewDeck>
          </Styles.DeckActionsWrapper>
        </Styles.Presentation>
        {flashcards.length > 0 && (
          <Styles.FlashCardsWrapper>
            <Styles.FlashCardsList>
              {flashcards.map(card => (
                <FlashCardItem
                  key={card.id}
                  card={card}
                  deleteFlashCard={handleDeleteFlashCard}
                />
              ))}
            </Styles.FlashCardsList>
          </Styles.FlashCardsWrapper>
        )}
      </Styles.Container>
      {modalAction === 'create-card' && (
        <ModalComponent eventClose={() => setModalAction('')}>
          <FlashCardFormCreate
            handleCreateFlashCard={handleCreateNewFlashCard}
          />
        </ModalComponent>
      )}
    </>
  )
}

export default DeckDetails
