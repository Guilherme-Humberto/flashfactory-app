import styled, { css } from 'styled-components'
import { ButtonDefault } from '@/styles/global'

export const Container = styled.section``
export const Presentation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`
export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
`
export const SubTitle = styled.h2`
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  max-width: 700px;
`
export const DeckActionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
  max-width: 700px;
`
export const ButtonNewDeck = styled(ButtonDefault)`
  &:hover {
    letter-spacing: initial !important;
  }
`

export const FlashCardsWrapper = styled.div`
  margin-top: 40px;
`
export const FlashCardsList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
