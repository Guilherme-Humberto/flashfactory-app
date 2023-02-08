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

export const FlashCardTagsList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 40px;
`
export const FlashCardTagItem = styled.span<{ backgroundColor: string }>`
  font-size: 14px;
  font-weight: 400;
  padding: 3px 15px;
  border-radius: 50px;
  border: 1px solid ${props => `${props.backgroundColor}72`};
  background: ${props => `${props.backgroundColor}18`};
  color: ${props => `${props.theme.colors.white}d9`};
`
export const FlashCardContent = styled.p`
  max-height: 500px;
  overflow-y: scroll;
  font-weight: 400;
`
export const FlashCardInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  color: #4f4a4a;

  svg {
    color: #a49696;
  }
`
