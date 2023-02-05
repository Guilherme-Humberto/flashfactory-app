import React, { useEffect, useState } from 'react'
import DeckDetails from '@/components/organisms/Admin/Decks/Details'
import { api } from '@/services/api'
import { IDeck, IFlashcard } from '@/interfaces'
import { useRouter } from 'next/router'

const AdminDecksDetailsPage: React.FC = () => {
  const router = useRouter()

  const [fetchTrigger, setFetchTrigger] = useState(false)
  const [deckData, setDeckData] = useState<IDeck>({} as IDeck)
  const [flashCardsData, setFlashCardsData] = useState<IFlashcard[]>([])

  const getDeckById = async (id: string) => {
    const { data: response } = await api.get(`/deck/${id}`)
    return setDeckData(response)
  }

  const getFlashCardsOfDeck = async (id: string) => {
    const { data: response } = await api.get(`/flashcard/list/deck/${id}`)
    console.log(response)
    return setFlashCardsData(response)
  }

  useEffect(() => {
    if (router.query?.id) {
      getDeckById(String(router.query.id))
      getFlashCardsOfDeck(String(router.query.id))
    }
  }, [fetchTrigger, router.query?.id])

  return (
    <main id="admin-page">
      <DeckDetails
        fetchTrigger={setFetchTrigger}
        deck={deckData}
        flashcards={flashCardsData}
      />
    </main>
  )
}

export default AdminDecksDetailsPage
