import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
        font: inherit;
    }

    html {
        /* color-scheme: dark light; */
    }
    
    body {
        min-height: 100vh;
        font-family: 'Work Sans', Arial, Helvetica, sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    figure,
    blockquote,
    dl,
    dd {
        padding: 0;
        margin: 0;
    }

    img,
    picture,
    svg,
    video {
        display: block;
        max-width: 100%;
    }

    input::-webkit-calendar-picker-indicator {
        display: none;
    }

    input[type='date']::-webkit-input-placeholder {
        visibility: hidden !important;
    }


    button {
        border: none;
        background-color: transparent;
        font-family: inherit;
        padding: 0;
        cursor: pointer;
    }
`
