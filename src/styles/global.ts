import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@400;500;600&display=swap');

  body {
    -webkit-font-smoothing: antialiased !important;
    background: var(--color-background);
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    padding: 0;
  }
  button{
    cursor: pointer;
  }
  body, input, button, textarea{
    font-weight: 500;
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
    color: var(--color-text-base);
  }

  h1,h2,h3,h4,h5,strong{
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }

  body, html, #root{
    height: 100vh;
  }


  :root {
  --color-background: #F0F0F7;
  --color-primary: #53424C;
  --color-secundary: #E5966A;
  --color-title-primary: ;
  --color-title-secundary: #E6E6F0;
  --color-background-title: #53424C;
  --color--base: #404040;
  --color-text-in-white: #E6E6F0;
  --color-button-background: #FBC466;
  --color-button-background-clean: #a8a8b3;
  --color-button-text: #404040;
  --color-error: #c53030;
  --color-text-placeholder: #a8a8b3;
  --color-white: #fff;
  font-size: 60%;

}

.container{
  width: 90vw;
  max-width: 1080px;
}

@media(min-width: 700px){
  :root{
    font-size: 62.5%;
  }
}
`;
export default GlobalStyles;
