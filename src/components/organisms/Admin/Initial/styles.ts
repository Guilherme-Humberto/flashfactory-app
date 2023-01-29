import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'

export const Container = styled.section``
export const Presentation = styled.div`
  margin-top: 30px;
  max-width: 700px;
`
export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
`
export const SubTitle = styled.h2`
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
`
export const SearchDeckWrapper = styled.div`
  margin-top: 40px;
  max-width: 700px;
`
export const DeckSlide = styled(Splide).attrs({
  options: {
    perPage: 3,
    arrows: false,
    pagination: false,
    gap: 20
  }
})`
  margin-top: 50px;
`
export const DeckSlideItem = styled(SplideSlide)``
export const DeckCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 273px;
  padding: 30px;
  border-radius: 10px;
  background: rgba(28, 32, 36, 0.52);
`
export const DeckStatusMessageWrapper = styled.div`
  margin-top: 40px;
  max-width: 700px;
`
export const DeckStatusText = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
`
export const DeckTitle = styled.strong`
  font-size: 24px;
`
export const DeckDescription = styled.small`
  font-size: 18px;
  line-height: 30px;
  color: ${props => props.theme.colors.gray};
`
export const DeckButtonsActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
`
export const DeckButtonAction = styled.div`
  display: grid;
  place-items: center;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  border: 2px solid transparent;

  &.fill {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.primary};
  }

  &.outline {
    background: transparent;
    border-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.white};
  }

  &:hover {
    cursor: pointer;
    border-color: ${props => props.theme.colors.success};
    background: ${props => props.theme.colors.success};
  }
`
