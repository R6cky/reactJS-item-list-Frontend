import createGlobalStyle from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style-type: none;   
    body{
        font-family: 'Handjet', cursive;
        font-size: 1.5rem;
    }
    
    
    
    
    :root{
        --color1:black;
        --color2:#39ff14;
        background: var(--color1);
    }

`;
