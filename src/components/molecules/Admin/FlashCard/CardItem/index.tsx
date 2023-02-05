import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { IFlashcard } from '@/interfaces'
import { IconFI } from '@/styles/global'
import * as Styles from './styles'
import { theme } from 'themes/primary'

interface Props {
  card: Partial<IFlashcard>
  flashCardData: (data: Partial<IFlashcard>) => void
  modalAction: (value: string) => void
  deleteFlashCard: (cardId: number) => void
}

const FlashCardItem: React.FC<Props> = ({
  card,
  modalAction,
  flashCardData,
  deleteFlashCard
}) => {
  const [flipCard, setFlipCard] = useState<boolean>(false)

  return (
    <Styles.Container>
      <Styles.FlashCardContent>
        <ReactCardFlip isFlipped={flipCard}>
          <Styles.FrontContent>
            <Styles.FlashCardStatus style={{ color: theme.colors.warning }}>
              Frente
            </Styles.FlashCardStatus>
            <Styles.FlashCardTitleContent>
              {card.front}
            </Styles.FlashCardTitleContent>
            <Styles.FlashCardTagsList>
              {card?.tags?.map(tag => (
                <Styles.FlashCardTagItem
                  key={tag.id}
                  backgroundColor={tag.color}
                >
                  {tag.title}
                </Styles.FlashCardTagItem>
              ))}
            </Styles.FlashCardTagsList>
          </Styles.FrontContent>

          <Styles.BackContent>
            <Styles.FlashCardStatus style={{ color: theme.colors.success }}>
              Verso
            </Styles.FlashCardStatus>
            <Styles.FlashCardTitleContent>
              {card.back}
            </Styles.FlashCardTitleContent>
          </Styles.BackContent>
        </ReactCardFlip>
      </Styles.FlashCardContent>
      <Styles.FlashCardBtnsActions>
        <button className="flip" onClick={() => setFlipCard(state => !state)}>
          <IconFI.FiCornerDownRight size={18} />
        </button>
        <button
          className="edit"
          onClick={() => {
            flashCardData(card)
            modalAction('edit-card')
          }}
        >
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
