import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'

import { createGlobalStyle } from 'styled-components'

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
`
