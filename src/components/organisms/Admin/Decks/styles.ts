import { ButtonDefault } from '@/styles/global'
import styled, { css } from 'styled-components'

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
export const DecksTableWrapper = styled.div`
  width: 100%;
  margin-top: 70px;
`
export const DeckTableHeaderTitle = styled.span`
  font-weight: 500;
  font-size: 20px;
`
export const DecksTableHeader = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 0.5fr 1.5fr 0.5fr 0.5fr 0.5fr;
  padding: 10px 20px;
`
export const DeckTableRow = styled.div`
  display: grid;
  gap: 30px;
  align-items: center;
  grid-template-columns: 0.5fr 1.5fr 0.5fr 0.5fr 0.5fr;
  padding: 20px;
  border-radius: 5px;
  margin-top: 10px;
  background: rgba(28, 32, 36, 0.52);
`
export const DeckTableRowItem = styled.span<{ status?: number }>`
  display: inline-block;
  max-width: 80%;
  height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &.btn-actions {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &.status-deck {
    display: grid;
    place-items: center;
    height: 100%;
    max-width: 80px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 100px;

    ${props =>
      props.status == 1
        ? css`
            color: ${props => props.theme.colors.success};
            border: 1px solid #52b7887a;
          `
        : css`
            color: ${props => props.theme.colors.danger};
            border: 1px solid #e6394678;
          `}
  }
`
export const DeckTableRowBtn = styled.button`
  height: 100%;
  cursor: pointer;
  font-size: 20px;

  &.btn-action-info:hover {
    color: ${props => props.theme.colors.primary2};
  }
  &.btn-action-edit:hover {
    color: ${props => props.theme.colors.warning};
  }
  &.btn-action-remove:hover {
    color: ${props => props.theme.colors.danger};
  }
`
