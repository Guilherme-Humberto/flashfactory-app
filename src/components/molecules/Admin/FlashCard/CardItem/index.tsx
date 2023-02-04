import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { IFlashcard } from '@/interfaces'
import { IconFI } from '@/styles/global'
import * as Styles from './styles'
import { theme } from 'themes/primary'
import { api } from '@/services/api'

interface Props {
  deckId: number
  card: Partial<IFlashcard>
}

const FlashCardItem: React.FC<Props> = ({ deckId, card }) => {
  const router = useRouter()

  const [flipCard, setFlipCard] = useState<boolean>(false)

  const handleDeleteFlashCard = async () => {
    await api.delete(`/flashcard/delete/${card.id}/deck/${deckId}`)
    return router.reload()
  }

  return (
    <Styles.Container flip={flipCard}>
      <Styles.FlashCardContent className="flip-card-inner">
        <div className="flip-card-front">
          <Styles.FlashCardStatus style={{ color: theme.colors.warning }}>
            Frente
          </Styles.FlashCardStatus>
          <Styles.FlashCardTitleContent>
            {card.front}
          </Styles.FlashCardTitleContent>
        </div>
        <div className="flip-card-back">
          <Styles.FlashCardStatus style={{ color: theme.colors.success }}>
            Verso
          </Styles.FlashCardStatus>
          <Styles.FlashCardTitleContent>
            {card.back}
          </Styles.FlashCardTitleContent>
        </div>
      </Styles.FlashCardContent>
      <Styles.FlashCardBtnsActions>
        <button className="flip" onClick={() => setFlipCard(state => !state)}>
          <IconFI.FiCornerDownRight size={18} />
        </button>
        <button className="edit">
          <IconFI.FiEdit size={16} />
        </button>
        <button className="remove" onClick={handleDeleteFlashCard}>
          <IconFI.FiTrash2 size={16} />
        </button>
      </Styles.FlashCardBtnsActions>
    </Styles.Container>
  )
}

export default FlashCardItem
