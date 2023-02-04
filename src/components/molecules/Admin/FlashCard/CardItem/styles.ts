import styled, { css } from 'styled-components'

export const Container = styled.div<{ flip?: boolean }>`
  position: relative;
  width: 400px;
  height: 200px;
  border-radius: 5px;

  ${props =>
    props.flip &&
    css`
      .flip-card-inner {
        transform: rotateY(180deg);
      }
    `}
`
export const FlashCardContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .flip-card-front {
    border-radius: 10px;
    background: ${props => props.theme.colors.secondary2};
  }

  .flip-card-back {
    border-radius: 10px;
    background-color: ${props => props.theme.colors.secondary2};
    transform: rotateY(180deg);
  }
`
export const FlashCardStatus = styled.span`
  font-weight: bold;
`
export const FlashCardTitleContent = styled.p`
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
