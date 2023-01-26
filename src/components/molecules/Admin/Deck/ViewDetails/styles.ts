import styled from 'styled-components'

export const Container = styled.div``
export const Title = styled.h3`
  font-size: 30px;
`
export const SubTitle = styled.small`
  display: block;
  font-size: 20px;
  font-weight: 300;
  margin: 10px 0;
  line-height: 30px;
`
export const DeckDate = styled.span`
  color: ${props => props.theme.colors.gray};
`
export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const DeckInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 30px 0;

  span {
    font-size: 18px;
  }
`
