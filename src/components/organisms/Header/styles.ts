import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 4rem;

  & > .links {
    display: flex;
    align-items: center;
  }

  & > .links a {
    margin: 0 1rem;
  }

  & > .links nav {
    margin-right: 2rem;
  }
`
