import React, { useState } from 'react'
import { IDeck, IFlashcard } from '@/interfaces'
import * as Styles from './styles'

interface Props {
  deck: IDeck
  flashcards: IFlashcard[]
}

const RunFlashCards: React.FC<Props> = ({ deck, flashcards }) => {
  const [cardIndex, setCardIndex] = useState(flashcards.map(card => card.id)[0])
  const [showCardBack, setShowCardBack] = useState(false)

  return (
    <Styles.Container>
      {flashcards
        .filter(card => card.id === cardIndex)
        .map(card => (
          <Styles.FlashCardWrapper key={card.id}>
            <Styles.DeckInfo>
              <p>
                {deck.id} - {deck.title}
              </p>
            </Styles.DeckInfo>
            <Styles.FrontCard>{card.front}</Styles.FrontCard>
            {showCardBack && (
              <Styles.BackCard>
                <small>Reposta</small>
                <p>{card.back}</p>
              </Styles.BackCard>
            )}
            <Styles.CardFooter>
              {!showCardBack ? (
                <Styles.CardFooterButton onClick={() => setShowCardBack(true)}>
                  Mostrar reposta
                </Styles.CardFooterButton>
              ) : (
                <>
                  <Styles.CardFooterButton className="is-error">
                    Errei
                  </Styles.CardFooterButton>
                  <Styles.CardFooterButton className="is-hard">
                    Dificil
                  </Styles.CardFooterButton>
                  <Styles.CardFooterButton className="is-easy">
                    Fácil
                  </Styles.CardFooterButton>
                </>
              )}
            </Styles.CardFooter>
          </Styles.FlashCardWrapper>
        ))}
    </Styles.Container>
  )
}

export default RunFlashCards
