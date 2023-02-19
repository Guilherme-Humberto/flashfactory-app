import AdminHeader from '@/components/molecules/Admin/Header'
import AdminMenuNavigation from '@/components/molecules/Admin/MenuNavigation'
import { useAppContext } from '@/context/AppContext'
import { IDeck, IFlashcard } from '@/interfaces'
import { api } from '@/services/api'
import React, { useEffect, useState } from 'react'
import * as Styles from './styles'
import * as Global from '@/styles/global'
import Input from '@/components/atoms/Input'
import ModalComponent from '@/components/molecules/Modal'
import DeckFormCreate from '@/components/molecules/Admin/Deck/Create'
import DeckViewDetails from '@/components/molecules/Admin/Deck/ViewDetails'
import RunFlashCards from '@/components/molecules/Admin/Deck/RunFlashCards'

const AdminInitial: React.FC = () => {
  const { user } = useAppContext()

  const [modalAction, setModalAction] = useState<string>('')
  const [searchDeck, setSearchDeck] = useState<string>('')
  const [deckList, setDeckList] = useState<IDeck[]>([])
  const [deckData, setDeckData] = useState<IDeck>({} as IDeck)
  const [deckListFilter, setDeckListFilter] = useState<IDeck[]>([])
  const [drawnFlashCardList, setDrawnFlashCardList] = useState<IFlashcard[]>([])

  const getDeckList = async () => {
    const { data } = await api.get('/deck/list')
    setDeckList(data)
    return setDeckListFilter(data)
  }

  const runFlashCards = (flashcard: IFlashcard[]) => {
    const shuffleArray = (inputArray: any) => {
      inputArray.sort(() => Math.random() - 0.5)
    }

    var cardIds = flashcard.map(card => card.id)
    shuffleArray(cardIds)

    const cardsExecuteSort: IFlashcard[] = []

    cardIds.forEach(item => {
      const card = flashcard.find(card => card.id == item)
      cardsExecuteSort.push(card as IFlashcard)
    })

    setDrawnFlashCardList(cardsExecuteSort)
    setModalAction('run-flashcards')
  }

  useEffect(() => {
    getDeckList()
  }, [])

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
          <Styles.Title>Ola {user?.name}</Styles.Title>
          <Styles.SubTitle>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </Styles.SubTitle>
        </Styles.Presentation>

        {deckList.length > 0 && (
          <Styles.SearchDeckWrapper>
            <Input
              type="text"
              value={searchDeck}
              placeholder="Informe o titulo do baralho"
              setState={setSearchDeck}
            />
          </Styles.SearchDeckWrapper>
        )}
        {deckList?.length > 0 && (
          <>
            <Styles.DeckSlide>
              {deckListFilter.map(item => (
                <Styles.DeckSlideItem key={item.id}>
                  <Styles.DeckCard>
                    <Styles.DeckTitle>{item.title}</Styles.DeckTitle>
                    <Styles.DeckDescription>
                      {item.description}
                    </Styles.DeckDescription>
                    <Styles.DeckButtonsActions>
                      <Styles.DeckButtonAction
                        className="outline"
                        onClick={() => {
                          setDeckData(item)
                          setModalAction('view-deck')
                        }}
                      >
                        <Global.IconFI.FiEye />
                      </Styles.DeckButtonAction>
                      {item.flashcards.length > 0 ? (
                        <Styles.DeckButtonAction
                          className="fill"
                          onClick={() => {
                            setDeckData(item)
                            runFlashCards(item.flashcards)
                          }}
                        >
                          <Global.IconFI.FiPlay />
                        </Styles.DeckButtonAction>
                      ) : (
                        <p>Este baralho não possui nenhuma carta</p>
                      )}
                    </Styles.DeckButtonsActions>
                  </Styles.DeckCard>
                </Styles.DeckSlideItem>
              ))}
            </Styles.DeckSlide>
          </>
        )}
        {deckList?.length === 0 && (
          <Styles.DeckStatusMessageWrapper>
            <Styles.DeckStatusText>
              Você ainda não possui nenhum baralho, clique no botão abaixo para
              criar seu primeiro baralho.
            </Styles.DeckStatusText>
            <Global.ButtonDefault
              className="fill"
              style={{ width: '100%', marginTop: 30 }}
              onClick={() => setModalAction('create-deck')}
            >
              Criar meu primeiro baralho
            </Global.ButtonDefault>
          </Styles.DeckStatusMessageWrapper>
        )}
      </Styles.Container>
      {modalAction === 'create-deck' && (
        <ModalComponent eventClose={() => setModalAction('')}>
          <DeckFormCreate modalAction={setModalAction} />
        </ModalComponent>
      )}
      {modalAction === 'view-deck' && (
        <ModalComponent eventClose={() => setModalAction('')}>
          <DeckViewDetails deck={deckData} />
        </ModalComponent>
      )}
      {modalAction === 'run-flashcards' && (
        <ModalComponent eventClose={() => setModalAction('')}>
          <RunFlashCards deck={deckData} flashcards={drawnFlashCardList} />
        </ModalComponent>
      )}
    </>
  )
}

export default AdminInitial
