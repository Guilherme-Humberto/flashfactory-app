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
import { IconFI } from '@/styles/global'
import FlashCardFormUpdate from '@/components/molecules/Admin/FlashCard/Update'

interface Props {
  deck: IDeck
  flashcards: IFlashcard[]
  fetchTrigger: () => void
}

const DeckDetails: React.FC<Props> = ({ deck, flashcards, fetchTrigger }) => {
  const [searchDeck, setSearchDeck] = useState<string>('')
  const [modalAction, setModalAction] = useState<string>('')
  const [flashCardData, setFlashCardData] = useState<Partial<IFlashcard>>(
    {} as Partial<IFlashcard>
  )

  const handleDeleteFlashCard = async (cardId: number) => {
    await api.delete(`/flashcard/delete/${cardId}/deck/${deck.id}`)
    return fetchTrigger()
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

  const handleRemoveFlashCardTags = async (
    cardId: number,
    tagList: Partial<ITag[]>
  ) => {
    try {
      const existsTags = flashCardData?.tags as ITag[]
      const listRemoveTags = existsTags.filter((tag, index) => {
        return !tagList.find(tagItem => tag?.id == tagItem?.id)
      })

      const listNewTags = tagList.filter((tag, index) => {
        return !existsTags.find(tagItem => tag?.title == tagItem?.title)
      })

      if (listRemoveTags.length > 0) {
        const response = listRemoveTags.map(async tag => {
          return await api.delete(`/tag/delete/${tag?.id}/flashcard/${cardId}`)
        })

        await Promise.all(response)
      }

      if (listNewTags.length > 0) {
        await handleCreateFlashCardTags(cardId, listNewTags)
      }

      setModalAction('')
      return fetchTrigger()
    } catch (error) {
      console.log(error)
    }
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
      return fetchTrigger()
    } catch (error) {
      console.log(error)
    }
  }

  const handleEditExistFlashCard = async (props: {
    card: Partial<IFlashcard>
    tags: Partial<ITag[]>
  }) => {
    try {
      // await api.put(`/flashcard/update/${flashCardData?.id}/deck/${deck.id}`, {
      //   front: props.card.front,
      //   back: props.card.back,
      //   deck: deck.id
      // })

      await handleRemoveFlashCardTags(Number(flashCardData?.id), props.tags)

      // setModalAction('')
      // return fetchTrigger()
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
                  flashCardData={setFlashCardData}
                  modalAction={setModalAction}
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
      {modalAction === 'edit-card' && (
        <ModalComponent eventClose={() => setModalAction('')}>
          <FlashCardFormUpdate
            card={flashCardData}
            handleEditExistFlashCard={handleEditExistFlashCard}
          />
        </ModalComponent>
      )}
      {modalAction.split('.')[0] === 'view-card' &&
        modalAction.split('.')[1] === 'front-card' && (
          <ModalComponent eventClose={() => setModalAction('')}>
            <Styles.FlashCardInfo>
              Esta é a frente do card, clique no ícone{' '}
              <IconFI.FiCornerDownRight size={18} /> para alterar a visualização
              do conteúdo{' '}
            </Styles.FlashCardInfo>
            <Styles.FlashCardContent>
              {flashCardData.front}
            </Styles.FlashCardContent>
            <Styles.FlashCardTagsList>
              {flashCardData?.tags?.map(tag => (
                <Styles.FlashCardTagItem
                  key={tag.id}
                  backgroundColor={tag.color}
                >
                  {tag.title}
                </Styles.FlashCardTagItem>
              ))}
            </Styles.FlashCardTagsList>
          </ModalComponent>
        )}
      {modalAction.split('.')[0] === 'view-card' &&
        modalAction.split('.')[1] === 'back-card' && (
          <ModalComponent eventClose={() => setModalAction('')}>
            <Styles.FlashCardInfo>
              Esta é a verso do card, clique no ícone{' '}
              <IconFI.FiCornerDownRight size={18} /> para alterar a visualização
              do conteúdo{' '}
            </Styles.FlashCardInfo>
            <Styles.FlashCardContent>
              {flashCardData.back}
            </Styles.FlashCardContent>
          </ModalComponent>
        )}
    </>
  )
}

export default DeckDetails
