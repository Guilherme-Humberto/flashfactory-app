import React, { useState } from 'react'
import { IDeck } from '@/interfaces'
import * as Styles from './styles'
import AdminHeader from '@/components/molecules/Admin/Header'
import AdminMenuNavigation from '@/components/molecules/Admin/MenuNavigation'
import Input from '@/components/atoms/Input'
import ModalComponent from '@/components/molecules/Modal'
import FlashCardFormCreate from '@/components/molecules/Admin/FlashCard/Create'
import FlashCardItem from '@/components/molecules/Admin/FlashCard/CardItem'

interface Props {
  data: IDeck
}

const DeckDetails: React.FC<Props> = ({ data }) => {
  const [searchDeck, setSearchDeck] = useState<string>('')
  const [modalAction, setModalAction] = useState<string>('')

  return (
    <>
      <Styles.Container className="constraint">
        <AdminHeader />
        <AdminMenuNavigation />
        <Styles.Presentation>
          <div>
            <Styles.Title>{data.title}</Styles.Title>
            <Styles.SubTitle>{data.description}</Styles.SubTitle>
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
        {data?.flashcards?.length > 0 && (
          <Styles.FlashCardsWrapper>
            <Styles.FlashCardsList>
              {data.flashcards.map(card => (
                <FlashCardItem key={card.id} deckId={data.id} card={card} />
              ))}
            </Styles.FlashCardsList>
          </Styles.FlashCardsWrapper>
        )}
      </Styles.Container>
      {modalAction === 'create-card' && (
        <ModalComponent eventClose={() => setModalAction('')}>
          <FlashCardFormCreate deckId={data.id} modalAction={setModalAction} />
        </ModalComponent>
      )}
    </>
  )
}

export default DeckDetails
