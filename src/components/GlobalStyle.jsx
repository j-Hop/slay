import { theme } from "./theme";
import { createGlobalStyle } from "styled-components";
import 'modern-normalize';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: inherit;
}

html,
body{
    scrollbar-color : #888 #f1f1f1;
    scrollbar-width: thin;
    scrollbar-gutter: stable;

    box-sizing: border-box;

    font-family: 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size:16px;
    font-style: normal;
    color : ${theme.colors.black};
    background: ${theme.colors.light};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code{
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

img{
    display: block;
    width:100%;
    height: auto;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
}


ul{
  margin:0;
  padding:0;
  list-style:none;  
}

a{
    text-decoration:none;
    list-style:inherit;
}

button{
    margin:0;
    padding:0;
    cursor:pointer;
    text-decoration: none;
}
`;