import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AdminHeader from '@/components/molecules/Admin/Header'
import AdminMenuNavigation from '@/components/molecules/Admin/MenuNavigation'
import { IDeck } from '@/interfaces'
import { api } from '@/services/api'
import Input from '@/components/atoms/Input'
import ModalComponent from '@/components/molecules/Modal'
import DeckFormCreate from '@/components/molecules/Admin/Deck/Create'
import Pagination from '@/components/molecules/Pagination'
import * as Global from '@/styles/global'
import DeckFormUpdate from '@/components/molecules/Admin/Deck/Update'
import * as Styles from './styles'

const DecksInitial: React.FC = () => {
  const initialPaginationState = {
    totalItems: 0,
    itemCount: 0,
    itemsPerPage: 5,
    totalPages: 0,
    currentPage: 1
  }

  const [modalAction, setModalAction] = useState<string>('')
  const [searchDeck, setSearchDeck] = useState<string>('')
  const [deckList, setDeckList] = useState<IDeck[]>([])
  const [deckData, setDeckData] = useState<IDeck>({} as IDeck)
  const [deckListFilter, setDeckListFilter] = useState<IDeck[]>([])
  const [pagination, setPagination] = useState(initialPaginationState)

  const router = useRouter()

  const handleChangePagination = (page: number) => {
    return setPagination(state => ({ ...state, currentPage: page + 1 }))
  }

  const getDeckList = async () => {
    const pagitionStr = `?page=${pagination.currentPage}&limit=${pagination.itemsPerPage}`
    const { data } = await api.get(`/deck/list${pagitionStr}`)
    setDeckList(data.items)
    setPagination(data.meta)
    return setDeckListFilter(data.items)
  }

  const removeDeck = async (id: number) => {
    await api.delete(`/deck/delete/${id}`)
    await getDeckList()
    return setPagination(state => ({ ...state, currentPage: 1 }))
  }

  useEffect(() => {
    getDeckList()
  }, [pagination.currentPage])

  useEffect(() => {
    const filterSearch = deckList.filter(deck =>
      deck.title.toLowerCase().includes(searchDeck.toLowerCase())
    )
    setDeckListFilter(filterSearch)
  }, [searchDeck])

  return (
    <>
      <Styles.Container className="constraint">
        <AdminHeader />
        <AdminMenuNavigation />
        <Styles.Presentation>
          <div>
            <Styles.Title>Sua lista de baralhos</Styles.Title>
            <Styles.SubTitle>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </Styles.SubTitle>
          </div>
          <Styles.DeckActionsWrapper>
            <Input
              type="text"
              value={searchDeck}
              placeholder="Informe o titulo do baralho"
              setState={setSearchDeck}
            />
            <Styles.ButtonNewDeck
              className="fill"
              onClick={() => setModalAction('create-deck')}
            >
              Novo Baralho
            </Styles.ButtonNewDeck>
          </Styles.DeckActionsWrapper>
        </Styles.Presentation>

        {deckListFilter?.length > 0 && (
          <>
            <Styles.DecksTableWrapper>
              <Styles.DecksTableHeader>
                <Styles.DeckTableHeaderTitle>Nome</Styles.DeckTableHeaderTitle>
                <Styles.DeckTableHeaderTitle>
                  Descrição
                </Styles.DeckTableHeaderTitle>
                <Styles.DeckTableHeaderTitle>
                  Status
                </Styles.DeckTableHeaderTitle>
                <Styles.DeckTableHeaderTitle>
                  Criado
                </Styles.DeckTableHeaderTitle>
                <Styles.DeckTableHeaderTitle>Ações</Styles.DeckTableHeaderTitle>
              </Styles.DecksTableHeader>
              {deckListFilter.map(item => (
                <Styles.DeckTableRow key={item.id}>
                  <Styles.DeckTableRowItem>
                    {item.title}
                  </Styles.DeckTableRowItem>
                  <Styles.DeckTableRowItem>
                    {item.description}
                  </Styles.DeckTableRowItem>
                  <Styles.DeckTableRowItem
                    className="status-deck"
                    status={item.status}
                  >
                    {item.status === 1 ? 'Ativo' : 'Inativo'}
                  </Styles.DeckTableRowItem>
                  <Styles.DeckTableRowItem>
                    {new Date(item.created_at).toLocaleDateString()}
                  </Styles.DeckTableRowItem>
                  <Styles.DeckTableRowItem className="btn-actions">
                    <Styles.DeckTableRowBtn
                      className="btn-action-info"
                      onClick={() =>
                        router.push(`/admin/decks/details/${item.id}`)
                      }
                    >
                      <Global.IconFI.FiInfo />
                    </Styles.DeckTableRowBtn>
                    <Styles.DeckTableRowBtn
                      className="btn-action-edit"
                      onClick={() => {
                        setDeckData(item)
                        setModalAction('update-deck')
                      }}
                    >
                      <Global.IconFI.FiEdit />
                    </Styles.DeckTableRowBtn>
                    <Styles.DeckTableRowBtn
                      className="btn-action-remove"
                      onClick={() => removeDeck(item.id)}
                    >
                      <Global.IconFI.FiTrash />
                    </Styles.DeckTableRowBtn>
                  </Styles.DeckTableRowItem>
                </Styles.DeckTableRow>
              ))}
            </Styles.DecksTableWrapper>
            <Pagination
              pagination={pagination}
              eventChangePage={handleChangePagination}
            />
          </>
        )}
      </Styles.Container>
      {modalAction === 'create-deck' && (
        <ModalComponent eventClose={() => setModalAction('')}>
          <DeckFormCreate fetch={getDeckList} modalAction={setModalAction} />
        </ModalComponent>
      )}
      {modalAction === 'update-deck' && (
        <ModalComponent eventClose={() => setModalAction('')}>
          <DeckFormUpdate
            deckData={deckData}
            fetch={getDeckList}
            modalAction={setModalAction}
          />
        </ModalComponent>
      )}
    </>
  )
}

export default DecksInitial
