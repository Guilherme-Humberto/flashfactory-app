import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
`
export const FlashCardContent = styled.div`
  border-radius: 5px;
  width: 450px;
  height: 100%;
  padding: 30px;
  background: ${props => props.theme.colors.secondary2};
`
export const FrontContent = styled.div`
  min-height: 280px;
`
export const BackContent = styled.div`
  min-height: 280px;
`

export const FlashCardStatus = styled.span`
  font-weight: bold;
`
export const FlashCardTitleContent = styled.div`
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
`
export const FlashCardBtnsActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  position: absolute;
  bottom: -10px;
  left: 20px;

  button {
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    opacity: 0.7;
    background: ${props => props.theme.colors.primary};
    cursor: pointer;
    transition: 0.5s;
  }

  button:hover {
    opacity: 1;
  }
`
export const FlashCardTagsList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
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
