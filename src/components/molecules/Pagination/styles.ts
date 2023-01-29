import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
  max-width: 200px;

  .pagination {
    display: flex;
    align-items: center;
  }

  .pagination__item a {
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    line-height: 100%;

    font-size: 15px;
    border-radius: 100px;
    border: 1px solid ${props => props.theme.colors.white};
    margin: 0 5px;
  }

  .pagination__item a:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.success};
    border-color: ${props => props.theme.colors.success};
  }

  .pagination__link--active a {
    background: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }
`
