import React from 'react'
import { IDeck } from '@/interfaces'
import * as Styles from './styles'
import * as Global from '@/styles/global'
import { useRouter } from 'next/router'

interface Props {
  deck: IDeck
}

const DeckViewDetails: React.FC<Props> = ({ deck }) => {
  const router = useRouter()

  return (
    <Styles.Container>
      <Styles.DeckDate>
        {new Date(deck.created_at).toLocaleDateString()}
      </Styles.DeckDate>
      <Styles.Title>{deck.title}</Styles.Title>
      <Styles.SubTitle>{deck.description}</Styles.SubTitle>
      <Styles.DeckInfos>
        <span>
          <strong>Status do baralho:</strong>{' '}
          {deck.status == 1 ? 'Ativo' : 'Desativado'}
        </span>
        <span>
          <strong>Total de flashcards:</strong> {deck.flashcards.length}
        </span>
      </Styles.DeckInfos>
      <Global.ButtonDefault
        className="fill"
        onClick={() => router.push(`/admin/decks/details/${deck.id}`)}
      >
        Gerenciar baralho
      </Global.ButtonDefault>
    </Styles.Container>
  )
}

export default DeckViewDetails
