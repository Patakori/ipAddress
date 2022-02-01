import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{

    --text: hsl(0, 0%, 17%);
    --background-card: hsl(0, 0%, 59%);
    --background: #fff

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width:1080px){
        font-size: 93.75%
    }
    @media (max-width:720px){
        font-size: 87.5%
    }
}

body {
    background: var(--background);
    -webkit-font-smooth: antialiased;
}

body, input, textarea, button {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 1.125rem;
}

h1, h2, h3,h4, h5, h6, strong {
    font-weight: 600;
} 

button {
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

`

