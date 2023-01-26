import '@splidejs/react-splide/css'

import styled, { createGlobalStyle } from 'styled-components'
export * as IconFI from 'react-icons/fi'

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        min-height: 100vh;
        background: ${props => props.theme.colors.background};
        overflow-x: hidden;
    }
    body,
    input,
    button,
    textarea,
    select {
        line-height: 30px;
        font-family: ${props => props.theme.fonts.primary};
        font-weight: 400;
        color: ${props => props.theme.colors.font};
    }
    input,
    button {
        border: none;
        outline: none;
        background: transparent;
    }
    img {
        display: block;
    }
    ul {
        list-style: none;
    }
    a,
    a:link,
    a:visited {
        color: ${props => props.theme.colors.font};
        text-decoration: none;
    }
    .constraint {
        max-width: 1440px;
        margin: 0 auto;
    }

    // Pages
    #admin-page {
        width: 100%;
        min-height: 100vh;
        background: ${props => props.theme.colors.secondary};
    }
`

export const ButtonDefault = styled.button`
  border-radius: 10px;
  padding: 20px 30px;
  font-size: 20px;
  font-weight: bold;
  transition: 0.5s;
  border: 2px solid ${props => props.theme.colors.primary};

  &.fill {
    background: ${props => props.theme.colors.primary};
  }
  &.outline {
    background: transparent;
  }

  &:hover {
    cursor: pointer;
    letter-spacing: 2px;
    background: ${props => props.theme.colors.success};
    border-color: ${props => props.theme.colors.success};
  }
`
