import styled, { css, createGlobalStyle } from 'styled-components'
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }
    body {
        min-height: 100vh;
        background: ${props => props.theme.colors.background};
        overflow-x: hidden;
        letter-spacing: 0.05rem;
    }

    body,
    input,
    button,
    textarea,
    select {
        font-family: ${props => props.theme.fonts.primary};
        font-weight: 400;
        font-size: 1.6rem;
        color: ${props => props.theme.colors.font};
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

export const Flex = css`
  display: flex;
  align-items: center;
`

const Icon = css`
  font-size: 2rem;
`

export const InstagramIcon = styled(AiOutlineInstagram)`
  ${Icon}
`
export const FacebookIcon = styled(AiOutlineFacebook)`
  ${Icon}
`
export const WhatsAppIcon = styled(FaWhatsapp)`
  ${Icon}
`
