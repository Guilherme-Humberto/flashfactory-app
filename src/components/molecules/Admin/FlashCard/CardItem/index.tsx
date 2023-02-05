import React, { useState } from 'react'
import { IFlashcard } from '@/interfaces'
import { IconFI } from '@/styles/global'
import * as Styles from './styles'
import { theme } from 'themes/primary'

interface Props {
  deleteFlashCard: (cardId: number) => void
  card: Partial<IFlashcard>
}

const FlashCardItem: React.FC<Props> = ({ card, deleteFlashCard }) => {
  const [flipCard, setFlipCard] = useState<boolean>(false)

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
          <Styles.FlashCardTagsList>
            {card?.tags?.map(tag => (
              <Styles.FlashCardTagItem backgroundColor={tag.color}>
                {tag.title}
              </Styles.FlashCardTagItem>
            ))}
          </Styles.FlashCardTagsList>
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
        <button
          className="remove"
          onClick={() => deleteFlashCard(Number(card.id))}
        >
          <IconFI.FiTrash2 size={16} />
        </button>
      </Styles.FlashCardBtnsActions>
    </Styles.Container>
  )
}

export default FlashCardItem
