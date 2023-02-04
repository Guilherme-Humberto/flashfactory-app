import React, { useEffect, useState } from 'react'
import DeckDetails from '@/components/organisms/Admin/Decks/Details'
import { api } from '@/services/api'
import { IDeck } from '@/interfaces'
import { useRouter } from 'next/router'

const AdminDecksDetailsPage: React.FC = () => {
  const router = useRouter()

  const [deckData, setDeckData] = useState<IDeck>({} as IDeck)

  const getDeckById = async (id: string) => {
    const { data: response } = await api.get(`/deck/${id}`)
    return setDeckData(response)
  }

  useEffect(() => {
    if (router.query?.id) {
      getDeckById(String(router.query.id))
    }
  }, [router.query?.id])

  return (
    <main id="admin-page">
      <DeckDetails data={deckData} />{' '}
    </main>
  )
}

export default AdminDecksDetailsPage
